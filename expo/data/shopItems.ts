import { Item } from "@/types/game";

export const shopItems: Item[] = [
  {
    id: "shop_item_1",
    name: "Steel Sword",
    description: "A well-crafted sword of fine steel. Superior to common iron weapons.",
    type: "Weapon",
    value: 150,
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dvcmR8ZW58MHx8MHx8fDA%3D",
    quantity: 1,
    stats: {
      attack: 10
    },
    equippable: true
  },
  {
    id: "shop_item_2",
    name: "Chainmail Armor",
    description: "Flexible armor made of interlocking metal rings. Offers good protection while maintaining mobility.",
    type: "Armor",
    value: 200,
    image: "https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBhcm1vcnxlbnwwfHwwfHx8MA%3D%3D",
    quantity: 1,
    stats: {
      defense: 8
    },
    equippable: true
  },
  {
    id: "shop_item_3",
    name: "Health Potion",
    description: "Restores 25 health when consumed.",
    type: "Potion",
    value: 5,
    image: "https://images.unsplash.com/photo-1596076463549-b7e00d6bf9d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90aW9ufGVufDB8fDB8fHww",
    quantity: 1,
    stats: {
      health: 25
    },
    consumable: true
  },
  {
    id: "shop_item_4",
    name: "Mana Potion",
    description: "Restores 25 mana when consumed.",
    type: "Potion",
    value: 5,
    image: "https://images.unsplash.com/photo-1596076463549-b7e00d6bf9d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90aW9ufGVufDB8fDB8fHww",
    quantity: 1,
    stats: {
      mana: 25
    },
    consumable: true
  },
  {
    id: "shop_item_5",
    name: "Traveler's Rations",
    description: "Simple but nourishing food for the road.",
    type: "Food",
    value: 2,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWR8ZW58MHx8MHx8fDA%3D",
    quantity: 1,
    stats: {
      health: 10
    },
    consumable: true
  },
  {
    id: "shop_item_6",
    name: "Longbow",
    description: "A powerful bow for striking enemies at a distance.",
    type: "Weapon",
    value: 120,
    image: "https://images.unsplash.com/photo-1511355624862-c2b9e9217ed6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym93fGVufDB8fDB8fHww",
    quantity: 1,
    stats: {
      attack: 8
    },
    equippable: true
  },
  {
    id: "shop_item_7",
    name: "Wizard's Staff",
    description: "A staff imbued with magical energy, perfect for spellcasting.",
    type: "Weapon",
    value: 180,
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhZmZ8ZW58MHx8MHx8fDA%3D",
    quantity: 1,
    stats: {
      attack: 6,
      magic: 10
    },
    equippable: true
  },
  {
    id: "shop_item_8",
    name: "Healing Herbs",
    description: "Medicinal herbs that can be used to create healing potions.",
    type: "Misc",
    value: 3,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVyYnN8ZW58MHx8MHx8fDA%3D",
    quantity: 1
  }
];