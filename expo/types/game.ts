export type CharacterClass = 
  | "Warrior" 
  | "Mage" 
  | "Rogue" 
  | "Cleric" 
  | "Ranger";

export type CharacterRace = 
  | "Human" 
  | "Elf" 
  | "Dwarf" 
  | "Orc" 
  | "Halfling";

export type CharacterReligion = 
  | "The Old Gods" 
  | "The Divine Light" 
  | "Nature's Path" 
  | "The Void" 
  | "None";

export type Gender = "Male" | "Female" | "Other";

export type ItemType = 
  | "Weapon" 
  | "Armor" 
  | "Helmet"
  | "Gloves"
  | "Boots"
  | "Shield"
  | "Ring"
  | "Amulet"
  | "Potion" 
  | "Food" 
  | "Quest" 
  | "Misc";

export type EquipmentSlot = 
  | "head"
  | "chest"
  | "legs"
  | "feet"
  | "hands"
  | "mainHand"
  | "offHand"
  | "ring1"
  | "ring2"
  | "amulet";

export type Item = {
  id: string;
  name: string;
  description: string;
  type: ItemType;
  slot?: EquipmentSlot;
  value: number;
  image: string;
  quantity: number;
  stats?: {
    [key: string]: number;
  };
  equippable?: boolean;
  equipped?: boolean;
  consumable?: boolean;
};

export type QuestObjective = {
  id: string;
  description: string;
  completed: boolean;
};

export type Quest = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  objectives?: QuestObjective[];
  reward?: {
    gold?: number;
    items?: Item[];
    experience?: number;
  };
};

export type Companion = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  portrait?: string;
  approval: number;
  romance?: number;
  stats: {
    strength: number;
    intelligence: number;
    dexterity: number;
    constitution: number;
    charisma: number;
  };
};

export type NPCType = "vendor" | "quest" | "companion" | "general";

export type NPC = {
  id: string;
  name: string;
  description: string;
  image: string;
  portrait?: string;
  type: NPCType;
  dialogue: string[];
  quest?: string; // Optional quest ID this NPC is associated with
};

export type CharacterPortrait = {
  name: string;
  portrait: string;
};

export type MapLocation = {
  id: string;
  name: string;
  description: string;
  icon: string;
  position: {
    x: number;
    y: number;
  };
  connections: string[];
  startingLocation?: boolean;
  npcs?: NPC[]; // NPCs at this location
};

export type CharacterStats = {
  strength: number;
  intelligence: number;
  dexterity: number;
  constitution: number;
  charisma: number;
};

export type CharacterAppearance = {
  skinTone: number;
  hairStyle: number;
  hairColor: number;
  faceShape: number;
  eyeColor: number;
};

export type PlayerCharacter = {
  name: string;
  gender: Gender;
  race: CharacterRace;
  class: CharacterClass;
  religion: CharacterReligion;
  level: number;
  experience: number;
  stats: CharacterStats;
  appearance: CharacterAppearance;
  gold: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  portrait?: string;
};

export type SaveGame = {
  id: string;
  name: string;
  timestamp: number;
  screenshot?: string;
  gameState: GameState;
  location: string;
  playtime: number;
};

export type GameState = {
  character: PlayerCharacter;
  inventory: Item[];
  quests: Quest[];
  companions: Companion[];
  discoveredLocations: string[];
  currentLocation: string;
  storyProgress: number;
  choices: Record<string, string>;
};

export type StoryScene = {
  id: string;
  background: string;
  text: string;
  speaker?: string;
  speakerPortrait?: string;
  choices?: {
    text: string;
    nextScene: string;
    condition?: (state: GameState) => boolean;
    effect?: (state: GameState) => GameState;
  }[];
  nextScene?: string;
  condition?: (state: GameState) => boolean;
  effect?: (state: GameState) => GameState;
};

export type CombatEnemy = {
  id: string;
  name: string;
  image: string;
  health: number;
  maxHealth: number;
  stats: {
    attack: number;
    defense: number;
    speed: number;
  };
  abilities: {
    name: string;
    damage: number;
    description: string;
  }[];
};

export type CombatState = {
  enemies: CombatEnemy[];
  playerTurn: boolean;
  round: number;
  log: string[];
};