import { GameState } from "@/types/game";

export const initialGameState: GameState = {
  character: {
    name: "Aelindra",
    gender: "Female",
    race: "Elf",
    class: "Mage",
    religion: "The Divine Light",
    level: 1,
    experience: 0,
    stats: {
      strength: 12,
      intelligence: 16,
      dexterity: 14,
      constitution: 13,
      charisma: 15
    },
    appearance: {
      skinTone: 2,
      hairStyle: 1,
      hairColor: 3,
      faceShape: 1,
      eyeColor: 2
    },
    gold: 100,
    health: 80,
    maxHealth: 80,
    mana: 120,
    maxMana: 120
  },
  inventory: [
    {
      id: "starter-staff",
      name: "Apprentice Staff",
      description: "A simple wooden staff imbued with minor magical properties.",
      type: "Weapon",
      slot: "mainHand",
      value: 50,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60",
      quantity: 1,
      stats: {
        intelligence: 2,
        attack: 8
      },
      equippable: true,
      equipped: true
    },
    {
      id: "starter-robes",
      name: "Novice Robes",
      description: "Simple cloth robes worn by apprentice mages.",
      type: "Armor",
      slot: "chest",
      value: 30,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60",
      quantity: 1,
      stats: {
        defense: 5,
        mana: 10
      },
      equippable: true,
      equipped: true
    },
    {
      id: "health-potion",
      name: "Health Potion",
      description: "A red potion that restores health when consumed.",
      type: "Potion",
      value: 25,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60",
      quantity: 3,
      stats: {
        health: 50
      },
      consumable: true
    },
    {
      id: "mana-potion",
      name: "Mana Potion",
      description: "A blue potion that restores mana when consumed.",
      type: "Potion",
      value: 25,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60",
      quantity: 2,
      stats: {
        mana: 30
      },
      consumable: true
    }
  ],
  quests: [
    {
      id: "tutorial-quest",
      title: "The Awakening",
      description: "Learn about your mysterious past and the strange powers that manifest around you.",
      completed: false,
      objectives: [
        {
          id: "meet-blacksmith",
          description: "Speak with Thorin the Blacksmith",
          completed: false
        },
        {
          id: "investigate-nightmares",
          description: "Investigate the source of your nightmares",
          completed: false
        }
      ],
      reward: {
        gold: 50,
        experience: 100
      }
    }
  ],
  companions: [],
  discoveredLocations: ["village"],
  currentLocation: "village",
  storyProgress: 0,
  choices: {}
};