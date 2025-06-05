import { CharacterPortrait } from "@/types/game";

export const characterPortraits: CharacterPortrait[] = [
  {
    name: "Thorin Ironforge",
    portrait: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Elder Thorne",
    portrait: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Phoenix Order Mystic",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlzdGljfGVufDB8fDB8fHww"
  },
  {
    name: "Lyra Stormwind",
    portrait: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Thorne Ironheart",
    portrait: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Elara Nightshade",
    portrait: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxmfGVufDB8fDB8fHww"
  },
  {
    name: "Master Aurelius",
    portrait: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFzdGVyfGVufDB8fDB8fHww"
  },
  {
    name: "Seraphina (Vision)",
    portrait: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Marcus (Vision)",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww"
  },
  {
    name: "Gareth Lightbringer",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww"
  },
  {
    name: "Void Lord Malachar",
    portrait: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGxvcmR8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Narrator",
    portrait: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D"
  }
];

export const getCharacterPortrait = (speakerName: string): string | undefined => {
  const character = characterPortraits.find(char => char.name === speakerName);
  return character?.portrait;
};