import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GameState, Item, Quest, Companion, PlayerCharacter, EquipmentSlot, SaveGame } from "@/types/game";
import { initialGameState } from "@/data/initialState";
import { storyScenes } from "@/data/storyScenes";

interface GameStore extends GameState {
  // Developer/Cheat state
  cheatsUnlocked: boolean;
  unlockCheats: () => void;
  
  // Save/Load state
  savedGames: SaveGame[];
  currentPlaytime: number;
  
  // Character actions
  updateCharacter: (character: Partial<PlayerCharacter>) => void;
  gainExperience: (amount: number) => void;
  levelUp: () => void;
  
  // Inventory actions
  addItem: (item: Item) => void;
  removeItem: (itemId: string, quantity?: number) => void;
  equipItem: (itemId: string) => void;
  unequipItem: (itemId: string) => void;
  useItem: (itemId: string) => void;
  
  // Quest actions
  addQuest: (quest: Quest) => void;
  updateQuest: (questId: string, updates: Partial<Quest>) => void;
  completeQuestObjective: (questId: string, objectiveId: string) => void;
  
  // Companion actions
  addCompanion: (companion: Companion) => void;
  updateCompanionApproval: (companionId: string, change: number) => void;
  updateCompanionRomance: (companionId: string, change: number) => void;
  
  // Location actions
  discoverLocation: (locationId: string) => void;
  travelToLocation: (locationId: string) => void;
  
  // Story actions
  advanceStory: () => void;
  makeChoice: (choiceId: string, choice: string) => void;
  
  // Save/Load actions
  saveGame: (name: string, screenshot?: string) => Promise<void>;
  loadGame: (saveId: string) => Promise<void>;
  deleteSave: (saveId: string) => void;
  updatePlaytime: (minutes: number) => void;
  
  // Game state
  getCurrentScene: () => any;
  resetGame: () => void;
  loadGameState: (savedState: GameState) => void;
  
  // Cheat actions
  cheatAddGold: (amount: number) => void;
  cheatSetStat: (stat: keyof PlayerCharacter["stats"], value: number) => void;
  cheatSetCompanionApproval: (companionId: string, value: number) => void;
  cheatSetCompanionRomance: (companionId: string, value: number) => void;
  cheatSetLevel: (level: number) => void;
  cheatSetHealth: (health: number) => void;
  cheatSetMana: (mana: number) => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialGameState,
      cheatsUnlocked: false,
      savedGames: [],
      currentPlaytime: 0,
      
      // Developer/Cheat actions
      unlockCheats: () => set({ cheatsUnlocked: true }),
      
      // Character actions
      updateCharacter: (updates) => set((state) => ({
        character: { ...state.character, ...updates }
      })),
      
      gainExperience: (amount) => set((state) => {
        const newExperience = state.character.experience + amount;
        const experienceToNextLevel = state.character.level * 1000;
        
        if (newExperience >= experienceToNextLevel) {
          // Level up!
          const newLevel = state.character.level + 1;
          return {
            character: {
              ...state.character,
              level: newLevel,
              experience: newExperience - experienceToNextLevel,
              maxHealth: state.character.maxHealth + 10,
              health: state.character.maxHealth + 10,
              maxMana: state.character.maxMana + 5,
              mana: state.character.maxMana + 5
            }
          };
        }
        
        return {
          character: {
            ...state.character,
            experience: newExperience
          }
        };
      }),
      
      levelUp: () => set((state) => {
        const newLevel = state.character.level + 1;
        return {
          character: {
            ...state.character,
            level: newLevel,
            experience: 0,
            maxHealth: state.character.maxHealth + 10,
            health: state.character.maxHealth + 10,
            maxMana: state.character.maxMana + 5,
            mana: state.character.maxMana + 5
          }
        };
      }),
      
      // Inventory actions
      addItem: (item) => set((state) => {
        const existingItemIndex = state.inventory.findIndex(i => i.id === item.id);
        
        if (existingItemIndex >= 0) {
          const updatedInventory = [...state.inventory];
          updatedInventory[existingItemIndex] = {
            ...updatedInventory[existingItemIndex],
            quantity: updatedInventory[existingItemIndex].quantity + (item.quantity || 1)
          };
          return { inventory: updatedInventory };
        } else {
          return { inventory: [...state.inventory, { ...item, quantity: item.quantity || 1 }] };
        }
      }),
      
      removeItem: (itemId, quantity = 1) => set((state) => {
        const existingItemIndex = state.inventory.findIndex(i => i.id === itemId);
        
        if (existingItemIndex >= 0) {
          const item = state.inventory[existingItemIndex];
          
          if (item.quantity <= quantity) {
            return {
              inventory: state.inventory.filter(i => i.id !== itemId)
            };
          } else {
            const updatedInventory = [...state.inventory];
            updatedInventory[existingItemIndex] = {
              ...item,
              quantity: item.quantity - quantity
            };
            return { inventory: updatedInventory };
          }
        }
        
        return state;
      }),
      
      equipItem: (itemId) => set((state) => {
        const targetItem = state.inventory.find(i => i.id === itemId);
        if (!targetItem || !targetItem.equippable || !targetItem.slot) {
          return state;
        }
        
        const updatedInventory = state.inventory.map(item => {
          if (item.id === itemId) {
            return { ...item, equipped: true };
          }
          
          // Unequip other items in the same slot
          if (item.slot === targetItem.slot && item.equipped) {
            return { ...item, equipped: false };
          }
          
          return item;
        });
        
        return { inventory: updatedInventory };
      }),
      
      unequipItem: (itemId) => set((state) => {
        const updatedInventory = state.inventory.map(item => {
          if (item.id === itemId) {
            return { ...item, equipped: false };
          }
          return item;
        });
        
        return { inventory: updatedInventory };
      }),
      
      useItem: (itemId) => set((state) => {
        const item = state.inventory.find(i => i.id === itemId);
        
        if (!item || !item.consumable) return state;
        
        let updatedCharacter = { ...state.character };
        
        // Apply item effects
        if (item.stats) {
          if (item.stats.health) {
            const newHealth = Math.min(
              updatedCharacter.health + item.stats.health,
              updatedCharacter.maxHealth
            );
            updatedCharacter.health = newHealth;
          }
          
          if (item.stats.mana) {
            const newMana = Math.min(
              updatedCharacter.mana + item.stats.mana,
              updatedCharacter.maxMana
            );
            updatedCharacter.mana = newMana;
          }
        }
        
        // Remove the used item
        let updatedInventory = [...state.inventory];
        const itemIndex = updatedInventory.findIndex(i => i.id === itemId);
        
        if (itemIndex >= 0) {
          if (updatedInventory[itemIndex].quantity <= 1) {
            updatedInventory = updatedInventory.filter(i => i.id !== itemId);
          } else {
            updatedInventory[itemIndex] = {
              ...updatedInventory[itemIndex],
              quantity: updatedInventory[itemIndex].quantity - 1
            };
          }
        }
        
        return {
          character: updatedCharacter,
          inventory: updatedInventory
        };
      }),
      
      // Quest actions
      addQuest: (quest) => set((state) => ({
        quests: [...state.quests, quest]
      })),
      
      updateQuest: (questId, updates) => set((state) => {
        const updatedQuests = state.quests.map(quest => {
          if (quest.id === questId) {
            return { ...quest, ...updates };
          }
          return quest;
        });
        
        return { quests: updatedQuests };
      }),
      
      completeQuestObjective: (questId, objectiveId) => set((state) => {
        const updatedQuests = state.quests.map(quest => {
          if (quest.id === questId && quest.objectives) {
            const updatedObjectives = quest.objectives.map(objective => {
              if (objective.id === objectiveId) {
                return { ...objective, completed: true };
              }
              return objective;
            });
            
            // Check if all objectives are completed
            const allCompleted = updatedObjectives.every(obj => obj.completed);
            
            return { 
              ...quest, 
              objectives: updatedObjectives,
              completed: allCompleted
            };
          }
          return quest;
        });
        
        return { quests: updatedQuests };
      }),
      
      // Companion actions
      addCompanion: (companion) => set((state) => ({
        companions: [...state.companions, companion]
      })),
      
      updateCompanionApproval: (companionId, change) => set((state) => {
        const updatedCompanions = state.companions.map(companion => {
          if (companion.id === companionId) {
            const newApproval = Math.max(0, Math.min(100, companion.approval + change));
            return { ...companion, approval: newApproval };
          }
          return companion;
        });
        
        return { companions: updatedCompanions };
      }),
      
      updateCompanionRomance: (companionId, change) => set((state) => {
        const updatedCompanions = state.companions.map(companion => {
          if (companion.id === companionId && companion.romance !== undefined) {
            const newRomance = Math.max(0, Math.min(100, companion.romance + change));
            return { ...companion, romance: newRomance };
          }
          return companion;
        });
        
        return { companions: updatedCompanions };
      }),
      
      // Location actions
      discoverLocation: (locationId) => set((state) => {
        if (state.discoveredLocations.includes(locationId)) {
          return state;
        }
        
        return {
          discoveredLocations: [...state.discoveredLocations, locationId]
        };
      }),
      
      travelToLocation: (locationId) => set({
        currentLocation: locationId
      }),
      
      // Story actions
      advanceStory: () => set((state) => ({
        storyProgress: state.storyProgress + 1
      })),
      
      makeChoice: (choiceId, choice) => set((state) => ({
        choices: { ...state.choices, [choiceId]: choice }
      })),
      
      // Save/Load actions
      saveGame: async (name, screenshot) => {
        const state = get();
        const saveGame: SaveGame = {
          id: Date.now().toString(),
          name,
          timestamp: Date.now(),
          screenshot,
          gameState: {
            character: state.character,
            inventory: state.inventory,
            quests: state.quests,
            companions: state.companions,
            discoveredLocations: state.discoveredLocations,
            currentLocation: state.currentLocation,
            storyProgress: state.storyProgress,
            choices: state.choices
          },
          location: state.currentLocation,
          playtime: state.currentPlaytime
        };
        
        set((state) => ({
          savedGames: [...state.savedGames, saveGame]
        }));
      },
      
      loadGame: async (saveId) => {
        const state = get();
        const saveGame = state.savedGames.find(save => save.id === saveId);
        
        if (saveGame) {
          set({
            ...saveGame.gameState,
            currentPlaytime: saveGame.playtime
          });
        }
      },
      
      deleteSave: (saveId) => set((state) => ({
        savedGames: state.savedGames.filter(save => save.id !== saveId)
      })),
      
      updatePlaytime: (minutes) => set((state) => ({
        currentPlaytime: state.currentPlaytime + minutes
      })),
      
      // Game state
      getCurrentScene: () => {
        const state = get();
        return storyScenes[state.storyProgress] || null;
      },
      
      resetGame: () => set({
        ...initialGameState,
        savedGames: get().savedGames, // Keep saved games
        cheatsUnlocked: get().cheatsUnlocked // Keep cheat status
      }),
      
      loadGameState: (savedState) => set(savedState),
      
      // Cheat actions
      cheatAddGold: (amount) => set((state) => ({
        character: {
          ...state.character,
          gold: Math.max(0, state.character.gold + amount)
        }
      })),
      
      cheatSetStat: (stat, value) => set((state) => ({
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            [stat]: Math.max(1, Math.min(30, value))
          }
        }
      })),
      
      cheatSetCompanionApproval: (companionId, value) => set((state) => {
        const updatedCompanions = state.companions.map(companion => {
          if (companion.id === companionId) {
            return { ...companion, approval: Math.max(0, Math.min(100, value)) };
          }
          return companion;
        });
        
        return { companions: updatedCompanions };
      }),
      
      cheatSetCompanionRomance: (companionId, value) => set((state) => {
        const updatedCompanions = state.companions.map(companion => {
          if (companion.id === companionId && companion.romance !== undefined) {
            return { ...companion, romance: Math.max(0, Math.min(100, value)) };
          }
          return companion;
        });
        
        return { companions: updatedCompanions };
      }),
      
      cheatSetLevel: (level) => set((state) => {
        const newLevel = Math.max(1, Math.min(50, level));
        const healthIncrease = (newLevel - state.character.level) * 10;
        const manaIncrease = (newLevel - state.character.level) * 5;
        
        return {
          character: {
            ...state.character,
            level: newLevel,
            maxHealth: Math.max(state.character.maxHealth + healthIncrease, 100),
            health: Math.max(state.character.health + healthIncrease, 100),
            maxMana: Math.max(state.character.maxMana + manaIncrease, 50),
            mana: Math.max(state.character.mana + manaIncrease, 50)
          }
        };
      }),
      
      cheatSetHealth: (health) => set((state) => ({
        character: {
          ...state.character,
          health: Math.max(1, Math.min(state.character.maxHealth, health))
        }
      })),
      
      cheatSetMana: (mana) => set((state) => ({
        character: {
          ...state.character,
          mana: Math.max(0, Math.min(state.character.maxMana, mana))
        }
      }))
    }),
    {
      name: "fantasy-game-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);