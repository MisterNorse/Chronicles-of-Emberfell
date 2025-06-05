import { Companion } from "@/types/game";
import { getCharacterPortrait } from "@/data/characterPortraits";

export const availableCompanions: Companion[] = [
  {
    id: "companion_1",
    name: "Lirael",
    role: "Mage",
    description: "A talented mage with a sharp wit and sharper tongue. She seeks ancient knowledge to restore her family's honor.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D",
    portrait: getCharacterPortrait("Lyra Stormwind"),
    approval: 50,
    romance: 0,
    stats: {
      strength: 6,
      intelligence: 18,
      dexterity: 12,
      constitution: 8,
      charisma: 14
    }
  },
  {
    id: "companion_2",
    name: "Damian",
    role: "Warrior",
    description: "A stoic dwarven warrior with an unbreakable sense of honor. He seeks redemption for a past failure.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    portrait: getCharacterPortrait("Thorne Ironheart"),
    approval: 50,
    stats: {
      strength: 16,
      intelligence: 10,
      dexterity: 8,
      constitution: 18,
      charisma: 6
    }
  },
  {
    id: "companion_3",
    name: "Elara",
    role: "Rogue",
    description: "An elven rogue with a mysterious past. She moves like a shadow and trusts very few.",
    image: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxmfGVufDB8fDB8fHww",
    portrait: getCharacterPortrait("Elara Nightshade"),
    approval: 50,
    romance: 0,
    stats: {
      strength: 10,
      intelligence: 14,
      dexterity: 18,
      constitution: 8,
      charisma: 12
    }
  },
  {
    id: "companion_4",
    name: "Zeus",
    role: "Cleric",
    description: "A devoted cleric who believes in the inherent goodness of all beings. His faith is his strength.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
    portrait: getCharacterPortrait("Gareth Lightbringer"),
    approval: 50,
    romance: 0,
    stats: {
      strength: 12,
      intelligence: 14,
      dexterity: 8,
      constitution: 12,
      charisma: 16
    }
  }
];
