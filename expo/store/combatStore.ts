import { create } from "zustand";
import { CombatState, CombatEnemy } from "@/types/game";
import { useGameStore } from "./gameStore";

interface CombatStore {
  inCombat: boolean;
  combatState: CombatState | null;
  
  // Combat actions
  startCombat: (enemies: CombatEnemy[]) => void;
  endCombat: (victory: boolean) => void;
  playerAttack: (targetId: string, abilityIndex: number) => void;
  enemyTurn: () => void;
  
  // Helper methods
  isPlayerTurn: () => boolean;
  getActiveEnemy: () => CombatEnemy | null;
}

export const useCombatStore = create<CombatStore>((set, get) => ({
  inCombat: false,
  combatState: null,
  
  startCombat: (enemies) => set({
    inCombat: true,
    combatState: {
      enemies,
      playerTurn: true,
      round: 1,
      log: ["Combat has begun!"]
    }
  }),
  
  endCombat: (victory) => {
    const gameStore = useGameStore.getState();
    
    if (victory) {
      // Calculate rewards
      const experienceGained = get().combatState?.enemies.reduce(
        (total, enemy) => total + (enemy.stats.attack * 10), 
        0
      ) || 0;
      
      const goldGained = get().combatState?.enemies.reduce(
        (total, enemy) => total + (enemy.stats.attack * 5), 
        0
      ) || 0;
      
      // Update game state
      gameStore.gainExperience(experienceGained);
      gameStore.updateCharacter({ 
        gold: gameStore.character.gold + goldGained 
      });
    }
    
    set({
      inCombat: false,
      combatState: null
    });
  },
  
  playerAttack: (targetId, abilityIndex) => {
    const state = get();
    if (!state.combatState || !state.combatState.playerTurn) return;
    
    const gameState = useGameStore.getState();
    const character = gameState.character;
    
    // Find target enemy
    const targetIndex = state.combatState.enemies.findIndex(e => e.id === targetId);
    if (targetIndex === -1) return;
    
    // Calculate damage based on character stats and ability
    const baseDamage = 5 + Math.floor(character.stats.strength / 2);
    const damage = Math.max(1, baseDamage);
    
    // Update enemy health
    const updatedEnemies = [...state.combatState.enemies];
    const targetEnemy = updatedEnemies[targetIndex];
    const newHealth = Math.max(0, targetEnemy.health - damage);
    updatedEnemies[targetIndex] = { ...targetEnemy, health: newHealth };
    
    // Create log entry
    const logEntry = `${character.name} attacks ${targetEnemy.name} for ${damage} damage!`;
    const updatedLog = [...state.combatState.log, logEntry];
    
    // Check if enemy is defeated
    if (newHealth <= 0) {
      updatedLog.push(`${targetEnemy.name} has been defeated!`);
    }
    
    // Check if all enemies are defeated
    const allDefeated = updatedEnemies.every(enemy => enemy.health <= 0);
    
    if (allDefeated) {
      updatedLog.push("Victory! All enemies have been defeated!");
      set({
        combatState: {
          ...state.combatState,
          enemies: updatedEnemies,
          log: updatedLog
        }
      });
      
      // End combat with victory
      setTimeout(() => get().endCombat(true), 1500);
      return;
    }
    
    // Switch to enemy turn
    set({
      combatState: {
        ...state.combatState,
        enemies: updatedEnemies,
        playerTurn: false,
        log: updatedLog
      }
    });
    
    // Trigger enemy turn after a short delay
    setTimeout(() => get().enemyTurn(), 1000);
  },
  
  enemyTurn: () => {
    const state = get();
    if (!state.combatState || state.combatState.playerTurn) return;
    
    const gameState = useGameStore.getState();
    const character = gameState.character;
    
    // Get active enemies (those still alive)
    const activeEnemies = state.combatState.enemies.filter(e => e.health > 0);
    
    if (activeEnemies.length === 0) {
      // No active enemies, end combat
      get().endCombat(true);
      return;
    }
    
    // Each enemy attacks
    let updatedLog = [...state.combatState.log];
    
    activeEnemies.forEach(enemy => {
      // Calculate enemy damage
      const damage = Math.max(1, enemy.stats.attack - Math.floor(character.stats.constitution / 4));
      
      // Update character health
      const newHealth = Math.max(0, character.health - damage);
      gameState.updateCharacter({ health: newHealth });
      
      // Create log entry
      updatedLog.push(`${enemy.name} attacks ${character.name} for ${damage} damage!`);
      
      // Check if player is defeated
      if (newHealth <= 0) {
        updatedLog.push(`${character.name} has been defeated!`);
      }
    });
    
    // Check if player is defeated
    if (character.health <= 0) {
      updatedLog.push("Defeat! You have been defeated in battle.");
      set({
        combatState: {
          ...state.combatState,
          log: updatedLog
        }
      });
      
      // End combat with defeat
      setTimeout(() => get().endCombat(false), 1500);
      return;
    }
    
    // Switch back to player turn and increment round
    set({
      combatState: {
        ...state.combatState,
        playerTurn: true,
        round: state.combatState.round + 1,
        log: updatedLog
      }
    });
  },
  
  isPlayerTurn: () => {
    const state = get();
    return state.combatState?.playerTurn || false;
  },
  
  getActiveEnemy: () => {
    const state = get();
    if (!state.combatState) return null;
    
    return state.combatState.enemies.find(e => e.health > 0) || null;
  }
}));