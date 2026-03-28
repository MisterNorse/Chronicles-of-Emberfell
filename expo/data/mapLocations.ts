import { MapLocation, NPC } from "@/types/game";
import { getCharacterPortrait } from "@/data/characterPortraits";

// Define NPCs
const vendors: NPC[] = [
  {
    id: "npc_vendor_1",
    name: "Gareth the Merchant",
    description: "A jovial trader with a keen eye for valuable goods. His cart is filled with weapons, armor, and various supplies.",
    image: "https://images.unsplash.com/photo-1564510182791-2299ed09ab38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lcmNoYW50fGVufDB8fDB8fHww",
    portrait: "https://images.unsplash.com/photo-1564510182791-2299ed09ab38?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lcmNoYW50fGVufDB8fDB8fHww",
    type: "vendor",
    dialogue: [
      "Welcome to my humble shop! What can I interest you in today?",
      "Ah, a traveler! I have wares from all corners of the realm.",
      "Quality goods for reasonable prices, that's my motto!",
      "Need something to keep you safe on the road? I've got just the thing.",
      "I've heard tales of your adventures, Phoenix Champion. Perhaps these items will aid your quest."
    ]
  },
  {
    id: "npc_vendor_2",
    name: "Elara the Alchemist",
    description: "A mysterious woman who deals in potions and magical ingredients. Her eyes seem to glow with an inner light.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D",
    portrait: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D",
    type: "vendor",
    dialogue: [
      "My potions are the finest in the land. What ails you, traveler?",
      "Seeking something to enhance your abilities? I have just what you need.",
      "Be careful with that one - it's more powerful than it looks.",
      "I can sense a destiny about you. Perhaps these wares will help you fulfill it.",
      "The Phoenix Order has long been customers of mine. Your parents bought many potions here."
    ]
  },
  {
    id: "npc_vendor_3",
    name: "Dain Ironbeard",
    description: "A gruff dwarven weaponsmith whose forge never grows cold. He crafts the finest weapons in the mountains.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    portrait: getCharacterPortrait("Thorne Ironheart"),
    type: "vendor",
    dialogue: [
      "Finest weapons in all the mountains, forged with dwarven skill!",
      "A blade is only as good as the warrior who wields it.",
      "I knew your father, lad. He had an eye for quality steel.",
      "These weapons have been blessed by the mountain spirits themselves.",
      "For the Phoenix Champion, I offer my finest work at a fair price."
    ]
  }
];

const questGivers: NPC[] = [
  {
    id: "npc_quest_1",
    name: "Elder Thorne",
    description: "The wise village elder who first revealed your destiny. His knowledge of ancient lore is unmatched.",
    image: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    portrait: getCharacterPortrait("Elder Thorne"),
    type: "quest",
    dialogue: [
      "The prophecy unfolds as foretold. Your journey has only just begun.",
      "Seek the ancient sites, young champion. They hold the keys to your power.",
      "Your parents would be proud of the hero you've become.",
      "The realm's fate rests in your hands, but you do not bear this burden alone."
    ],
    quest: "quest_elder_wisdom"
  },
  {
    id: "npc_quest_2",
    name: "Captain Aldric",
    description: "A veteran soldier who has seen too many battles. He seeks aid in protecting the innocent.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
    portrait: getCharacterPortrait("Gareth Lightbringer"),
    type: "quest",
    dialogue: [
      "The shadow creatures grow bolder each day. We need your help.",
      "My men are brave, but they're no match for these dark forces.",
      "If you can clear the trade routes, the people will sing your praises.",
      "Every village you save brings hope back to this troubled land."
    ],
    quest: "quest_clear_routes"
  }
];

export const mapLocations: MapLocation[] = [
  {
    id: "loc_1",
    name: "Eldervale Village",
    description: "A peaceful village nestled in a verdant valley. Your home for as long as you can remember, where your journey began.",
    icon: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    position: { x: 150, y: 300 },
    connections: ["loc_2"],
    startingLocation: true,
    npcs: [vendors[0], questGivers[0]]
  },
  {
    id: "loc_2",
    name: "Whispering Woods",
    description: "An ancient forest where the trees seem to whisper secrets to those who listen carefully. Here you first met Lyra and discovered your true power.",
    icon: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    position: { x: 250, y: 200 },
    connections: ["loc_1", "loc_3", "loc_4"]
  },
  {
    id: "loc_3",
    name: "Temple of Dawn",
    description: "A sacred temple built to honor the rising sun. Ancient magic still lingers within its walls, and here you claimed your Phoenix heritage.",
    icon: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    position: { x: 350, y: 150 },
    connections: ["loc_2"]
  },
  {
    id: "loc_4",
    name: "Shadowfen Marsh",
    description: "A treacherous swamp shrouded in mist. Many travelers have lost their way in its depths, but here you found redemption for Thorne Ironheart.",
    icon: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    position: { x: 200, y: 100 },
    connections: ["loc_2", "loc_5"]
  },
  {
    id: "loc_5",
    name: "Frostpeak Mountains",
    description: "Towering mountains capped with eternal snow. The air is thin and the dangers many, but here you faced the ice dragon and found Elara Nightshade.",
    icon: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    position: { x: 100, y: 50 },
    connections: ["loc_4", "loc_6"],
    npcs: [vendors[2]]
  },
  {
    id: "loc_6",
    name: "Dragonspire Citadel",
    description: "An imposing fortress built into the side of a mountain. Once home to dragon riders of legend, now the site of the second seal.",
    icon: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    position: { x: 50, y: 150 },
    connections: ["loc_5", "loc_7"]
  },
  {
    id: "loc_7",
    name: "Sunhaven City",
    description: "The gleaming capital city of the realm. A center of trade, politics, and intrigue, where you faced your greatest challenge and discovered the truth of your destiny.",
    icon: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    position: { x: 120, y: 250 },
    connections: ["loc_6", "loc_1"],
    npcs: [vendors[1], questGivers[1]]
  }
];