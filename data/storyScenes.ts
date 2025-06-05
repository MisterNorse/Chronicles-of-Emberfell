import { StoryScene, ItemType } from "@/types/game";
import { getCharacterPortrait } from "@/data/characterPortraits";

export const storyScenes: StoryScene[] = [
  // Prologue - The Nightmares Begin
  {
    id: "prologue_1",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
     text: "It has been twenty years since the fire—since the night the sky turned red and your childhood ended in smoke and screams. You were only a child when the shadows of death came, when your village burned, and everything you knew was consumed by ash.",Add commentMore actions
    text: "After all these years you've never forgotten, the pain imbedded in your mind in which every night becomes restless as the images flood your dreams once again. The creatue of darkness and those who controlled it.",
    text: "Your Ma, Pa and even your sister vanished within the fire, friends whom you cherished charred into memory.",
    text: "All you remember after that is being enraged by the destruction and death only to be left in darkness.",
    text: "A boy only 12 years old survived what should have left him dead too, was it luck or did the Gods have other plans.",
    nextScene: "prologue_2"
  },
  {
    id: "prologue_2",
    background: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    text: "When the chaos settled and the smoke cleared, the sun begun to rise from the mountains of Loriens Crest.",
    text: "As you barely remained consious, two elves investigating the ruins found you among hurdled up among the charred ruins of what was once your home, they notice your arm marked in a unnatural glow.",
    text: "blacksmith took you in, raised you as his own.",
    speaker: "Lytheron Asterrain",
    speakerPortrait: getCharacterPortrait("Lytheron Asterrai"),
    text: "Curious..",
    speaker: "Lirael Asterrain",
    speakerPortrait: getCharacterPortrait("Lirael Asterrain"),
    text: "He looks funny father.",
    speaker: "Lytheron Asterrain",
    speakerPortrait: getCharacterPortrait("Lytheron Asterrai"),
    text: "I guess you're right sweet one.",
    speaker: "Lirael Asterrain",
    speakerPortrait: getCharacterPortrait("Lirael Asterrain"),
    text: "What happened to him?",
    speaker: "Lytheron Asterrain",
    speakerPortrait: getCharacterPortrait("Lytheron Asterrai"),
    text: "I'm not so sure, no one could have survived this.",
    speaker: "Lirael Asterrain",
    speakerPortrait: getCharacterPortrait("Lirael Asterrain"),
    text: "Are we going to help him?",
    speaker: "Lytheron Asterrain",
    speakerPortrait: getCharacterPortrait("Lytheron Asterrai"),
    text: "I'm sure Altheris would have my head if we brought an outsider to the village.",
    speaker: "Lirael Asterrain",
    speakerPortrait: getCharacterPortrait("Lirael Asterrain"),
    text: "He doesn't deserve to be alone father..",
    speaker: "Lytheron Asterrain",
    speakerPortrait: getCharacterPortrait("Lytheron Asterrai"),
    text: "You're right, no one deserves this. Come child, help me bring him home.",
    speaker: "Lirael Asterrain",
    speakerPortrait: getCharacterPortrait("Lirael Asterrain"),
    text: "EEK! Okay.",
    nextScene: "prologue_2"
  },
  {
    id: "prologue_2",
    background: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    text: "Thorin Ironforge found you among the ruins, a terrified child clutching a strange pendant that pulsed with otherworldly light. The dwarf blacksmith took you in, raised you as his own.",
    speaker: "Thorin Ironforge",
    speakerPortrait: getCharacterPortrait("Thorin Ironforge"),
    nextScene: "prologue_3"
  },
  {
    id: "prologue_3",
    background: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    text: "But the nightmares never stopped. Every night, visions of fire and shadow, of a woman's voice calling your name. And with each nightmare came... phenomena.",
    nextScene: "prologue_4"
  },
  {
    id: "prologue_4",
    background: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    text: "Objects would float around your sleeping form. Golden light would emanate from your skin. Thorin would find you levitating above your bed, surrounded by swirling magical energy.",
    nextScene: "prologue_5"
  },
  {
    id: "prologue_5",
    background: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    text: "Desperate for answers, Thorin reached out to the ancient Order of the Phoenix. They came in the dead of night, cloaked figures who spoke in hushed tones about 'the awakening' and 'ancient bloodlines.'",
    speaker: "Thorin Ironforge",
    speakerPortrait: getCharacterPortrait("Thorin Ironforge"),
    nextScene: "prologue_6"
  },
  {
    id: "prologue_6",
    background: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
    text: "They placed protective wards around the forge, taught you meditation techniques to control the power. But they warned that one day, you would need to seek the truth of your heritage.",
    speaker: "Phoenix Order Mystic",
    speakerPortrait: getCharacterPortrait("Phoenix Order Mystic"),
    nextScene: "prologue_7"
  },
  {
    id: "prologue_7",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "Now, on your twentieth birthday, the nightmares have returned with a vengeance. The pendant grows warm against your chest, and you know the time has come to uncover the truth.",
    nextScene: "chapter1_start"
  },

  // Chapter 1 - The Call to Adventure
  {
    id: "chapter1_start",
    background: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Elder Thorne awaits you in the village square, his weathered face grave with concern. The other villagers whisper among themselves, casting worried glances in your direction.",
    speaker: "Elder Thorne",
    speakerPortrait: getCharacterPortrait("Elder Thorne"),
    nextScene: "chapter1_2"
  },
  {
    id: "chapter1_2",
    background: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Last night's incident cannot be ignored. The entire village felt the magical surge. Windows shattered, animals fled in terror. The time for hiding your true nature has passed.",
    speaker: "Elder Thorne",
    speakerPortrait: getCharacterPortrait("Elder Thorne"),
    nextScene: "chapter1_3"
  },
  {
    id: "chapter1_3",
    background: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    text: "I received word from the Phoenix Order. They request your immediate presence at the Temple of Dawn. The ancient prophecy speaks of one who will either save our realm... or destroy it.",
    speaker: "Elder Thorne",
    speakerPortrait: getCharacterPortrait("Elder Thorne"),
    choices: [
      {
        text: "I'm ready to face whatever destiny awaits me.",
        nextScene: "chapter1_accept",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "hero_path": "determined" }
        })
      },
      {
        text: "I never asked for this burden. Why must it be me?",
        nextScene: "chapter1_reluctant",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "hero_path": "reluctant" }
        })
      },
      {
        text: "Tell me more about this prophecy. What does it say exactly?",
        nextScene: "chapter1_curious",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "hero_path": "inquisitive" }
        })
      }
    ]
  },
  {
    id: "chapter1_accept",
    background: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Your courage honors the memory of your parents. They too faced impossible odds with unwavering resolve. Take this - it belonged to your mother.",
    speaker: "Elder Thorne",
    speakerPortrait: getCharacterPortrait("Elder Thorne"),
    nextScene: "chapter1_continue"
  },
  {
    id: "chapter1_reluctant",
    background: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Destiny rarely asks for our consent, young one. Your parents understood this. They sacrificed everything to ensure you would be ready for this moment.",
    speaker: "Elder Thorne",
    speakerPortrait: getCharacterPortrait("Elder Thorne"),
    nextScene: "chapter1_continue"
  },
  {
    id: "chapter1_curious",
    background: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    text: "The prophecy speaks of the Phoenix Champion - one born of fire and shadow, who will either unite the realm's magic or see it consumed by darkness. The signs all point to you.",
    speaker: "Elder Thorne",
    speakerPortrait: getCharacterPortrait("Elder Thorne"),
    nextScene: "chapter1_continue"
  },
  {
    id: "chapter1_continue",
    background: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Here is an ancient map and your mother's journal. The path to the Temple of Dawn is treacherous, but you will not travel alone. Seek out Lyra Stormwind in the Whispering Woods - she has been waiting for you.",
    speaker: "Elder Thorne",
    speakerPortrait: getCharacterPortrait("Elder Thorne"),
    effect: (state) => {
      const mapItem = {
        id: "item_ancient_map",
        name: "Ancient Map of the Realm",
        description: "A detailed map showing hidden paths and ancient sites across the realm.",
        type: "Quest" as ItemType,
        value: 0,
        image: "https://images.unsplash.com/photo-1524842495237-6abc73f2a5d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwfGVufDB8fDB8fHww",
        quantity: 1
      };
      
      const journalItem = {
        id: "item_mothers_journal",
        name: "Mother's Journal",
        description: "A leather-bound journal filled with your mother's research on ancient magic and the Phoenix Order.",
        type: "Quest" as ItemType,
        value: 0,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
        quantity: 1
      };
      
      return {
        ...state,
        inventory: [...state.inventory, mapItem, journalItem],
        discoveredLocations: [...state.discoveredLocations, "loc_2", "loc_3"]
      };
    },
    nextScene: "chapter1_departure"
  },
  {
    id: "chapter1_departure",
    background: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZCUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    text: "As you leave Eldervale behind, the weight of destiny settles on your shoulders. The road ahead winds into the mysterious Whispering Woods, where your first companion awaits.",
    effect: (state) => {
      const newQuest = {
        id: "quest_find_lyra",
        title: "Seek the Storm Mage",
        description: "Find Lyra Stormwind in the Whispering Woods. Elder Thorne believes she holds crucial information about your destiny.",
        completed: false,
        objectives: [
          {
            id: "obj_enter_woods",
            description: "Enter the Whispering Woods",
            completed: false
          },
          {
            id: "obj_find_lyra",
            description: "Locate Lyra Stormwind",
            completed: false
          }
        ],
        reward: {
          experience: 200
        }
      };
      
      return {
        ...state,
        quests: [...state.quests, newQuest]
      };
    },
    nextScene: "chapter2_woods_entrance"
  },

  // Chapter 2 - The Whispering Woods
  {
    id: "chapter2_woods_entrance",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "The Whispering Woods live up to their name. Ancient trees seem to murmur secrets in a language you almost understand. Your pendant grows warm, responding to the magical energy that permeates this place.",
    nextScene: "chapter2_deeper_woods"
  },
  {
    id: "chapter2_deeper_woods",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "A figure emerges from behind an ancient oak - a young woman with silver hair and eyes that crackle with barely contained lightning. She studies you with intense curiosity.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_meet_lyra"
  },
  {
    id: "chapter2_meet_lyra",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "So, you're the one the Phoenix Order has been whispering about. I can feel the power radiating from you - raw, untrained, dangerous. I'm Lyra Stormwind, and I've been waiting here for three days.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    choices: [
      {
        text: "Elder Thorne sent me. He said you could help me understand my powers.",
        nextScene: "chapter2_lyra_helpful",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "lyra_first_impression": "respectful" }
        })
      },
      {
        text: "Dangerous? I can control my abilities just fine, thank you.",
        nextScene: "chapter2_lyra_defensive",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "lyra_first_impression": "defensive" }
        })
      },
      {
        text: "You're beautiful. Are all mages as striking as you?",
        nextScene: "chapter2_lyra_flirt",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "lyra_first_impression": "flirtatious" }
        })
      }
    ]
  },
  {
    id: "chapter2_lyra_helpful",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Good. Humility will serve you well on this journey. The Phoenix Order has tasked me with guiding you to the Temple of Dawn, but first, we need to test your abilities.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_magic_test"
  },
  {
    id: "chapter2_lyra_defensive",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Is that so? Then perhaps you can explain why every magical creature within a mile radius is fleeing from your presence? Your power is like a beacon in the darkness.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_magic_test"
  },
  {
    id: "chapter2_lyra_flirt",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Flattery will get you nowhere with me, Phoenix Champion. Though I admit, few have the courage to flirt with someone who could turn them to ash. Now, let's focus on why we're here.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_magic_test"
  },
  {
    id: "chapter2_magic_test",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Focus on that fallen log. Channel your energy, but gently. Imagine golden fire flowing from your core through your hands. Don't force it - let it flow naturally.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_magic_result"
  },
  {
    id: "chapter2_magic_result",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Incredible! The log didn't just catch fire - it transformed into pure golden light before crumbling to ash. That's Phoenix magic, the rarest and most powerful form of elemental control.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_shadow_attack"
  },
  {
    id: "chapter2_shadow_attack",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Suddenly, the forest grows cold. Dark shapes emerge from the shadows between the trees - Shadow Wraiths, drawn by your magical display. Their hollow eyes fix on you with malevolent hunger.",
    nextScene: "chapter2_first_combat"
  },
  {
    id: "chapter2_first_combat",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Stay behind me! Your Phoenix fire can destroy them, but you need to learn control first. Watch how I weave lightning through my movements!",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    effect: (state) => {
      // Add Lyra as a companion
      const lyra = {
        id: "companion_lyra",
        name: "Lyra Stormwind",
        role: "Storm Mage",
        description: "A brilliant young mage specializing in lightning magic. She's sharp-tongued but fiercely loyal to those who earn her respect.",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D",
        portrait: getCharacterPortrait("Lyra Stormwind"),
        approval: 60,
        romance: 10,
        stats: {
          strength: 8,
          intelligence: 18,
          dexterity: 14,
          constitution: 10,
          charisma: 16
        }
      };
      
      return {
        ...state,
        companions: [...state.companions, lyra]
      };
    },
    nextScene: "chapter2_post_combat"
  },
  {
    id: "chapter2_post_combat",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Well fought! Your instincts are good, even if your technique needs work. Those Shadow Wraiths were scouts - something darker is stirring in the realm.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_revelation"
  },
  {
    id: "chapter2_revelation",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "There's something you need to know about your parents. They weren't just victims of a random attack. They were Phoenix Guardians, protectors of an ancient seal that keeps a great evil imprisoned.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    choices: [
      {
        text: "What kind of evil? And why didn't anyone tell me this before?",
        nextScene: "chapter2_learn_more",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "parent_reaction": "curious" }
        })
      },
      {
        text: "So they died because of some ancient responsibility? That's not fair!",
        nextScene: "chapter2_angry_response",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "parent_reaction": "angry" }
        })
      },
      {
        text: "Then I'll finish what they started. I'll protect that seal.",
        nextScene: "chapter2_determined_response",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "parent_reaction": "determined" }
        })
      }
    ]
  },
  {
    id: "chapter2_learn_more",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "The Void Lord Malachar - an entity of pure darkness that once nearly consumed our world. The Phoenix Order has kept this secret to protect you, but now the seal weakens.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_journey_continues"
  },
  {
    id: "chapter2_angry_response",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Your anger is understandable, but it won't bring them back. Channel that fury into strength - you'll need it for what's coming.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_journey_continues"
  },
  {
    id: "chapter2_determined_response",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "Spoken like a true Phoenix Champion. Your parents would be proud. But first, you need training, allies, and the ancient artifacts that can amplify your power.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter2_journey_continues"
  },
  {
    id: "chapter2_journey_continues",
    background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fHww",
    text: "The Temple of Dawn holds the first piece of the puzzle - the Phoenix Codex. But the path is treacherous, and we'll need more allies. I know of a dwarf warrior in the Shadowfen Marsh who might help.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    effect: (state) => {
      // Update quest and discover new locations
      return {
        ...state,
        discoveredLocations: [...state.discoveredLocations, "loc_4", "loc_5"],
        storyProgress: state.storyProgress
      };
    },
    nextScene: "chapter3_marsh_approach"
  },

  // Chapter 3 - The Shadowfen Marsh
  {
    id: "chapter3_marsh_approach",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "The Shadowfen Marsh stretches before you, a maze of twisted trees and murky water. The air is thick with mist and the sound of unseen creatures moving through the bog.",
    nextScene: "chapter3_marsh_deeper"
  },
  {
    id: "chapter3_marsh_deeper",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "There! Do you see that light through the mist? That's Thorne's camp. He's been hunting the Marsh Basilisk that's been terrorizing local villages.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter3_meet_thorne"
  },
  {
    id: "chapter3_meet_thorne",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "A massive dwarf emerges from the mist, his armor scarred from countless battles. His eyes are haunted, carrying the weight of some terrible burden.",
    speaker: "Thorne Ironheart",
    speakerPortrait: getCharacterPortrait("Thorne Ironheart"),
    nextScene: "chapter3_thorne_speaks"
  },
  {
    id: "chapter3_thorne_speaks",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "So, you're the Phoenix Champion. I can see the resemblance to your mother - she had the same determined look when she faced impossible odds. I failed her once. I won't fail you.",
    speaker: "Thorne Ironheart",
    speakerPortrait: getCharacterPortrait("Thorne Ironheart"),
    choices: [
      {
        text: "You knew my mother? Tell me about her.",
        nextScene: "chapter3_mother_story",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "thorne_approach": "personal" }
        })
      },
      {
        text: "What do you mean you failed her? What happened?",
        nextScene: "chapter3_failure_story",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "thorne_approach": "direct" }
        })
      },
      {
        text: "The past is past. Will you help us reach the Temple of Dawn?",
        nextScene: "chapter3_practical_approach",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "thorne_approach": "practical" }
        })
      }
    ]
  },
  {
    id: "chapter3_mother_story",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "Seraphina was the bravest person I ever knew. She could have lived safely in the Phoenix Order's sanctuary, but she chose to fight on the front lines. She saved my life more times than I can count.",
    speaker: "Thorne Ironheart",
    speakerPortrait: getCharacterPortrait("Thorne Ironheart"),
    nextScene: "chapter3_basilisk_appears"
  },
  {
    id: "chapter3_failure_story",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "I was supposed to be there that night, fighting alongside your parents. But I was delayed, trapped in these very marshes by the basilisk. By the time I arrived... it was too late.",
    speaker: "Thorne Ironheart",
    speakerPortrait: getCharacterPortrait("Thorne Ironheart"),
    nextScene: "chapter3_basilisk_appears"
  },
  {
    id: "chapter3_practical_approach",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "Practical, like your father. Yes, I'll help you, but first we have unfinished business. The basilisk that kept me from saving your parents still lurks in these marshes.",
    speaker: "Thorne Ironheart",
    speakerPortrait: getCharacterPortrait("Thorne Ironheart"),
    nextScene: "chapter3_basilisk_appears"
  },
  {
    id: "chapter3_basilisk_appears",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "The ground trembles as a massive serpentine form rises from the murky water. The Marsh Basilisk's eyes glow with malevolent intelligence, and its gaze could turn a man to stone.",
    nextScene: "chapter3_basilisk_battle"
  },
  {
    id: "chapter3_basilisk_battle",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "Don't look directly at its eyes! Thorne charges forward with his massive war hammer while Lyra weaves protective lightning around the group. This is your chance to test your Phoenix fire in real combat!",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter3_victory"
  },
  {
    id: "chapter3_victory",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "The basilisk falls, its ancient evil finally purged by your combined efforts. Thorne stands over its corpse, tears streaming down his weathered face.",
    speaker: "Thorne Ironheart",
    speakerPortrait: getCharacterPortrait("Thorne Ironheart"),
    effect: (state) => {
      // Add Thorne as a companion
      const thorne = {
        id: "companion_thorne",
        name: "Thorne Ironheart",
        role: "Guardian Warrior",
        description: "A dwarven warrior haunted by past failures but determined to protect the Phoenix Champion. His loyalty is absolute once earned.",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHdhcmZ8ZW58MHx8MHx8fDA%3D",
        portrait: getCharacterPortrait("Thorne Ironheart"),
        approval: 70,
        romance: 0,
        stats: {
          strength: 18,
          intelligence: 12,
          dexterity: 8,
          constitution: 20,
          charisma: 10
        }
      };
      
      return {
        ...state,
        companions: [...state.companions, thorne]
      };
    },
    nextScene: "chapter3_redemption"
  },
  {
    id: "chapter3_redemption",
    background: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbXB8ZW58MHx8MHx8fDA%3D",
    text: "Twenty years I've hunted this beast. Twenty years of guilt and shame. Your parents can finally rest in peace. I pledge my hammer and my life to your cause, Phoenix Champion.",
    speaker: "Thorne Ironheart",
    speakerPortrait: getCharacterPortrait("Thorne Ironheart"),
    nextScene: "chapter4_temple_approach"
  },

  // Chapter 4 - The Temple of Dawn
  {
    id: "chapter4_temple_approach",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "The Temple of Dawn rises before you like a golden beacon against the sky. Ancient Phoenix symbols glow with inner fire along its walls, responding to your presence.",
    nextScene: "chapter4_temple_guardian"
  },
  {
    id: "chapter4_temple_guardian",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "A figure in golden robes awaits at the temple entrance - Master Aurelius, High Guardian of the Phoenix Order. His ageless face shows both relief and concern at your arrival.",
    speaker: "Master Aurelius",
    speakerPortrait: getCharacterPortrait("Master Aurelius"),
    nextScene: "chapter4_aurelius_speaks"
  },
  {
    id: "chapter4_aurelius_speaks",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "Welcome, child of Seraphina and Marcus. The time of prophecy is upon us. The Void Lord stirs in his prison, and only the Phoenix Champion can renew the ancient seals.",
    speaker: "Master Aurelius",
    speakerPortrait: getCharacterPortrait("Master Aurelius"),
    nextScene: "chapter4_truth_revealed"
  },
  {
    id: "chapter4_truth_revealed",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "Your parents died protecting the first seal. There are three more scattered across the realm, each guarded by trials that will test your worthiness. But first, you must claim your birthright.",
    speaker: "Master Aurelius",
    speakerPortrait: getCharacterPortrait("Master Aurelius"),
    nextScene: "chapter4_phoenix_codex"
  },
  {
    id: "chapter4_phoenix_codex",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "Within the temple's heart lies the Phoenix Codex - a tome of ancient knowledge that will unlock your true potential. But beware, the trials within will test not just your power, but your heart.",
    speaker: "Master Aurelius",
    speakerPortrait: getCharacterPortrait("Master Aurelius"),
    choices: [
      {
        text: "I'm ready to face whatever trials await. My parents' sacrifice won't be in vain.",
        nextScene: "chapter4_trial_courage",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "trial_approach": "courage" }
        })
      },
      {
        text: "What exactly will these trials involve? I need to know what I'm facing.",
        nextScene: "chapter4_trial_wisdom",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "trial_approach": "wisdom" }
        })
      },
      {
        text: "Can my companions come with me? I don't want to face this alone.",
        nextScene: "chapter4_trial_bonds",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "trial_approach": "bonds" }
        })
      }
    ]
  },
  {
    id: "chapter4_trial_courage",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "Your courage honors your lineage. The trials will show you visions of possible futures - some bright, some dark. You must choose which path the realm will take.",
    speaker: "Master Aurelius",
    speakerPortrait: getCharacterPortrait("Master Aurelius"),
    nextScene: "chapter4_enter_trials"
  },
  {
    id: "chapter4_trial_wisdom",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "Wisdom serves you well. The trials will test your judgment, your compassion, and your willingness to sacrifice for the greater good. Not all who enter emerge unchanged.",
    speaker: "Master Aurelius",
    speakerPortrait: getCharacterPortrait("Master Aurelius"),
    nextScene: "chapter4_enter_trials"
  },
  {
    id: "chapter4_trial_bonds",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "The bonds you forge will be your greatest strength. Your companions may enter, but know that the trials will test them as well. Their loyalty will be challenged.",
    speaker: "Master Aurelius",
    speakerPortrait: getCharacterPortrait("Master Aurelius"),
    nextScene: "chapter4_enter_trials"
  },
  {
    id: "chapter4_enter_trials",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "As you step into the temple's inner sanctum, reality shifts around you. You find yourself standing in a recreation of your childhood village, but something is wrong...",
    nextScene: "chapter4_vision_village"
  },
  {
    id: "chapter4_vision_village",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "You see your parents as they were - young, powerful, alive. Your mother turns to you with tears in her eyes, speaking words that echo across time itself.",
    speaker: "Seraphina (Vision)",
    speakerPortrait: getCharacterPortrait("Seraphina (Vision)"),
    nextScene: "chapter4_mothers_message"
  },
  {
    id: "chapter4_mothers_message",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "My beloved child, if you're seeing this, then our sacrifice was not in vain. The power within you is both a gift and a burden. Use it wisely, for the fate of all depends on your choices.",
    speaker: "Seraphina (Vision)",
    speakerPortrait: getCharacterPortrait("Seraphina (Vision)"),
    nextScene: "chapter4_fathers_message"
  },
  {
    id: "chapter4_fathers_message",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "Remember, true strength comes not from power alone, but from the bonds you forge and the love you protect. Trust in your companions, for they will be your light in the darkness ahead.",
    speaker: "Marcus (Vision)",
    speakerPortrait: getCharacterPortrait("Marcus (Vision)"),
    nextScene: "chapter4_trial_choice"
  },
  {
    id: "chapter4_trial_choice",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "The vision fades, and you stand before three pedestals, each holding a different artifact. You may choose only one - each will shape your destiny in different ways.",
    choices: [
      {
        text: "The Phoenix Blade - A weapon of pure fire that can cut through any darkness.",
        nextScene: "chapter4_blade_chosen",
        effect: (state) => {
          const phoenixBlade = {
            id: "item_phoenix_blade",
            name: "Phoenix Blade",
            description: "A legendary sword forged from phoenix fire. It burns with eternal flame and can banish shadow creatures.",
            type: "Weapon" as ItemType,
            value: 1000,
            image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dvcmR8ZW58MHx8MHx8fDA%3D",
            quantity: 1,
            stats: { attack: 25, fire_damage: 15 },
            equippable: true
          };
          return {
            ...state,
            inventory: [...state.inventory, phoenixBlade],
            choices: { ...state.choices, "phoenix_artifact": "blade" }
          };
        }
      },
      {
        text: "The Phoenix Heart - An amulet that amplifies magical power and protects the wearer.",
        nextScene: "chapter4_heart_chosen",
        effect: (state) => {
          const phoenixHeart = {
            id: "item_phoenix_heart",
            name: "Phoenix Heart",
            description: "A crystalline amulet containing the essence of a phoenix. It greatly enhances magical abilities.",
            type: "Armor" as ItemType,
            value: 1000,
            image: "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGNvaW58ZW58MHx8MHx8fDA%3D",
            quantity: 1,
            stats: { magic_power: 20, defense: 10 },
            equippable: true
          };
          return {
            ...state,
            inventory: [...state.inventory, phoenixHeart],
            choices: { ...state.choices, "phoenix_artifact": "heart" }
          };
        }
      },
      {
        text: "The Phoenix Codex - A tome of ancient knowledge containing powerful spells and wisdom.",
        nextScene: "chapter4_codex_chosen",
        effect: (state) => {
          const phoenixCodex = {
            id: "item_phoenix_codex",
            name: "Phoenix Codex",
            description: "An ancient tome containing the accumulated wisdom of the Phoenix Order and powerful fire magic.",
            type: "Quest" as ItemType,
            value: 1000,
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            quantity: 1,
            stats: { wisdom: 15, spell_power: 20 }
          };
          return {
            ...state,
            inventory: [...state.inventory, phoenixCodex],
            choices: { ...state.choices, "phoenix_artifact": "codex" }
          };
        }
      }
    ]
  },
  {
    id: "chapter4_blade_chosen",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "The Phoenix Blade ignites in your hands, its flames dancing with your own inner fire. You feel the strength of countless Phoenix Champions who wielded it before you.",
    nextScene: "chapter5_mountain_path"
  },
  {
    id: "chapter4_heart_chosen",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "The Phoenix Heart pulses with warm light as it settles against your chest. Your magical power surges, and you feel more connected to the elemental forces than ever before.",
    nextScene: "chapter5_mountain_path"
  },
  {
    id: "chapter4_codex_chosen",
    background: "https://images.unsplash.com/photo-1604548530945-f483e0839b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcGxlfGVufDB8fDB8fHww",
    text: "The Phoenix Codex opens at your touch, revealing secrets of magic and wisdom accumulated over millennia. Knowledge flows into your mind like a gentle stream.",
    nextScene: "chapter5_mountain_path"
  },

  // Chapter 5 - The Frostpeak Mountains
  {
    id: "chapter5_mountain_path",
    background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    text: "The path to the second seal leads through the treacherous Frostpeak Mountains. The air grows thin and cold as you climb higher, but your Phoenix fire keeps you warm.",
    nextScene: "chapter5_mountain_village"
  },
  {
    id: "chapter5_mountain_village",
    background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    text: "A small mountain village appears through the snow, its people huddled around fires for warmth. An elegant elven woman approaches - her movements are graceful as a shadow.",
    speaker: "Elara Nightshade",
    speakerPortrait: getCharacterPortrait("Elara Nightshade"),
    nextScene: "chapter5_meet_elara"
  },
  {
    id: "chapter5_meet_elara",
    background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    text: "I am Elara Nightshade, and I've been tracking you since you left the temple. The Phoenix Order sent me to guide you to the Dragonspire Citadel, but we have a problem.",
    speaker: "Elara Nightshade",
    speakerPortrait: getCharacterPortrait("Elara Nightshade"),
    nextScene: "chapter5_ice_dragon"
  },
  {
    id: "chapter5_ice_dragon",
    background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    text: "An ancient ice dragon has awakened and claimed the citadel as its lair. The villagers are terrified, and the path to the second seal is blocked. We need to find another way... or face the dragon.",
    speaker: "Elara Nightshade",
    speakerPortrait: getCharacterPortrait("Elara Nightshade"),
    choices: [
      {
        text: "We'll face the dragon. My Phoenix fire should be effective against ice.",
        nextScene: "chapter5_dragon_battle",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "dragon_approach": "direct" }
        })
      },
      {
        text: "Is there a way to sneak past it? We don't need to fight every battle.",
        nextScene: "chapter5_stealth_approach",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "dragon_approach": "stealth" }
        })
      },
      {
        text: "Maybe we can reason with it. Dragons are intelligent creatures.",
        nextScene: "chapter5_diplomatic_approach",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "dragon_approach": "diplomatic" }
        })
      }
    ]
  },
  {
    id: "chapter5_dragon_battle",
    background: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    text: "The ice dragon roars as your Phoenix fire melts its frozen breath. It's a battle of opposing elements - fire against ice, life against death. Your companions fight valiantly beside you.",
    nextScene: "chapter5_dragon_defeated"
  },
  {
    id: "chapter5_stealth_approach",
    background: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    text: "Elara leads you through hidden passages she discovered during her reconnaissance. You slip past the sleeping dragon and reach the citadel's heart undetected.",
    nextScene: "chapter5_second_seal"
  },
  {
    id: "chapter5_diplomatic_approach",
    background: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    text: "The ancient dragon listens to your words with surprising interest. It reveals that it too opposes the Void Lord and agrees to let you pass in exchange for a promise to protect the mountain villages.",
    nextScene: "chapter5_dragon_ally"
  },
  {
    id: "chapter5_dragon_defeated",
    background: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    text: "The dragon falls, its ancient malice finally ended. As it dies, it speaks of regret and thanks you for freeing it from the Void Lord's corruption. The path to the seal is clear.",
    effect: (state) => {
      const elara = {
        id: "companion_elara",
        name: "Elara Nightshade",
        role: "Shadow Dancer",
        description: "An elven rogue with a mysterious past. She moves like shadow and strikes like lightning, but her loyalty runs deeper than her secretive nature suggests.",
        image: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxmfGVufDB8fDB8fHx8MA%3D%3D",
        portrait: getCharacterPortrait("Elara Nightshade"),
        approval: 65,
        romance: 15,
        stats: {
          strength: 12,
          intelligence: 16,
          dexterity: 20,
          constitution: 10,
          charisma: 14
        }
      };
      return {
        ...state,
        companions: [...state.companions, elara]
      };
    },
    nextScene: "chapter5_second_seal"
  },
  {
    id: "chapter5_dragon_ally",
    background: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    text: "The dragon's wisdom proves invaluable. It shares ancient knowledge about the Void Lord's weaknesses and grants you a scale that will protect against shadow magic.",
    effect: (state) => {
      const dragonScale = {
        id: "item_dragon_scale",
        name: "Ancient Dragon Scale",
        description: "A scale from an ancient ice dragon, imbued with protective magic against shadow and void energies.",
        type: "Armor" as ItemType,
        value: 500,
        image: "https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBhcm1vcnxlbnwwfHwwfHx8MA%3D%3D",
        quantity: 1,
        stats: { shadow_resistance: 25, defense: 8 },
        equippable: true
      };
      
      const elara = {
        id: "companion_elara",
        name: "Elara Nightshade",
        role: "Shadow Dancer",
        description: "An elven rogue with a mysterious past. She moves like shadow and strikes like lightning, but her loyalty runs deeper than her secretive nature suggests.",
        image: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxmfGVufDB8fDB8fHx8MA%3D%3D",
        portrait: getCharacterPortrait("Elara Nightshade"),
        approval: 75,
        romance: 20,
        stats: {
          strength: 12,
          intelligence: 16,
          dexterity: 20,
          constitution: 10,
          charisma: 14
        }
      };
      
      return {
        ...state,
        inventory: [...state.inventory, dragonScale],
        companions: [...state.companions, elara]
      };
    },
    nextScene: "chapter5_second_seal"
  },
  {
    id: "chapter5_second_seal",
    background: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    text: "In the citadel's deepest chamber, you find the second seal - a crystalline formation pulsing with weakening light. As you approach, your Phoenix power automatically begins to restore it.",
    nextScene: "chapter5_seal_renewed"
  },
  {
    id: "chapter5_seal_renewed",
    background: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
    text: "The seal blazes with renewed power, and you feel the Void Lord's influence weaken. But with each seal you restore, you also feel the weight of your destiny growing heavier.",
    nextScene: "chapter6_sunhaven_approach"
  },

  // Chapter 6 - Sunhaven City and the Final Revelation
  {
    id: "chapter6_sunhaven_approach",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Sunhaven City spreads before you like a jewel in the valley - the gleaming capital of the realm. But something is wrong. Dark clouds gather overhead, and the city's usual bustle seems muted.",
    nextScene: "chapter6_city_corruption"
  },
  {
    id: "chapter6_city_corruption",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The Void Lord's influence has reached even here. Citizens move like sleepwalkers, their eyes vacant. Shadow creatures patrol the streets openly, and the city guard seems powerless to stop them.",
    speaker: "Lyra Stormwind",
    speakerPortrait: getCharacterPortrait("Lyra Stormwind"),
    nextScene: "chapter6_meet_gareth"
  },
  {
    id: "chapter6_meet_gareth",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "A figure in white robes approaches - Gareth Lightbringer, a cleric whose faith burns as bright as your Phoenix fire. His presence seems to push back the encroaching darkness.",
    speaker: "Gareth Lightbringer",
    speakerPortrait: getCharacterPortrait("Gareth Lightbringer"),
    nextScene: "chapter6_gareth_speaks"
  },
  {
    id: "chapter6_gareth_speaks",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Phoenix Champion! The city's third seal lies beneath the cathedral, but it's heavily guarded by the Void Lord's servants. Worse, they've taken hostages - innocent people who will die if we attack directly.",
    speaker: "Gareth Lightbringer",
    speakerPortrait: getCharacterPortrait("Gareth Lightbringer"),
    choices: [
      {
        text: "We'll find a way to save everyone. No innocent lives will be lost on my watch.",
        nextScene: "chapter6_save_all",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "city_approach": "heroic" }
        })
      },
      {
        text: "The needs of the many outweigh the needs of the few. The seal must be protected.",
        nextScene: "chapter6_pragmatic",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "city_approach": "pragmatic" }
        })
      },
      {
        text: "Tell me more about these hostages. Who are they and where are they being held?",
        nextScene: "chapter6_gather_info",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "city_approach": "strategic" }
        })
      }
    ]
  },
  {
    id: "chapter6_save_all",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Your compassion honors the Phoenix legacy. We'll need to coordinate a complex rescue operation while simultaneously protecting the seal. It won't be easy, but it's the right thing to do.",
    speaker: "Gareth Lightbringer",
    speakerPortrait: getCharacterPortrait("Gareth Lightbringer"),
    nextScene: "chapter6_rescue_mission"
  },
  {
    id: "chapter6_pragmatic",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "A difficult choice, but perhaps a necessary one. Sometimes leaders must make decisions that weigh heavy on the soul. Your companions look troubled, but they understand the stakes.",
    speaker: "Gareth Lightbringer",
    speakerPortrait: getCharacterPortrait("Gareth Lightbringer"),
    nextScene: "chapter6_direct_assault"
  },
  {
    id: "chapter6_gather_info",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Wise to gather intelligence first. The hostages include the city's leaders, several Phoenix Order members, and... your adoptive father, Thorin Ironforge. He was captured trying to reach you.",
    speaker: "Gareth Lightbringer",
    speakerPortrait: getCharacterPortrait("Gareth Lightbringer"),
    nextScene: "chapter6_personal_stakes"
  },
  {
    id: "chapter6_personal_stakes",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The man who raised you, who protected you through your darkest nightmares, is now in mortal danger. Your Phoenix fire flares with emotion, and your companions ready themselves for whatever you decide.",
    choices: [
      {
        text: "Thorin saved me once. Now it's my turn to save him. We rescue everyone.",
        nextScene: "chapter6_rescue_mission",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "thorin_decision": "rescue" }
        })
      },
      {
        text: "Thorin would understand. The realm's safety comes first, even before family.",
        nextScene: "chapter6_difficult_choice",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "thorin_decision": "sacrifice" }
        })
      }
    ]
  },
  {
    id: "chapter6_rescue_mission",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Your team splits up - Elara and Thorne create a distraction while you, Lyra, and Gareth infiltrate the cathedral. The rescue is dangerous but successful, and you reach the third seal.",
    effect: (state) => {
      const gareth = {
        id: "companion_gareth",
        name: "Gareth Lightbringer",
        role: "Divine Cleric",
        description: "A devoted cleric whose faith in the light never wavers. His healing magic and unwavering moral compass make him invaluable in dark times.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
        portrait: getCharacterPortrait("Gareth Lightbringer"),
        approval: 85,
        romance: 0,
        stats: {
          strength: 14,
          intelligence: 16,
          dexterity: 10,
          constitution: 14,
          charisma: 18
        }
      };
      return {
        ...state,
        companions: [...state.companions, gareth]
      };
    },
    nextScene: "chapter6_third_seal"
  },
  {
    id: "chapter6_difficult_choice",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The assault is swift and decisive, but the cost is heavy. You reach the third seal, but the weight of your choices will haunt you. Leadership demands terrible sacrifices.",
    effect: (state) => {
      const gareth = {
        id: "companion_gareth",
        name: "Gareth Lightbringer",
        role: "Divine Cleric",
        description: "A devoted cleric whose faith in the light never wavers. His healing magic and unwavering moral compass make him invaluable in dark times.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
        portrait: getCharacterPortrait("Gareth Lightbringer"),
        approval: 60,
        romance: 0,
        stats: {
          strength: 14,
          intelligence: 16,
          dexterity: 10,
          constitution: 14,
          charisma: 18
        }
      };
      return {
        ...state,
        companions: [...state.companions, gareth]
      };
    },
    nextScene: "chapter6_third_seal"
  },
  {
    id: "chapter6_direct_assault",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The battle is fierce but decisive. Your Phoenix fire cuts through the shadow creatures like a blade through darkness. You reach the third seal, though the cost weighs heavily on your heart.",
    effect: (state) => {
      const gareth = {
        id: "companion_gareth",
        name: "Gareth Lightbringer",
        role: "Divine Cleric",
        description: "A devoted cleric whose faith in the light never wavers. His healing magic and unwavering moral compass make him invaluable in dark times.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
        portrait: getCharacterPortrait("Gareth Lightbringer"),
        approval: 70,
        romance: 0,
        stats: {
          strength: 14,
          intelligence: 16,
          dexterity: 10,
          constitution: 14,
          charisma: 18
        }
      };
      return {
        ...state,
        companions: [...state.companions, gareth]
      };
    },
    nextScene: "chapter6_third_seal"
  },
  {
    id: "chapter6_third_seal",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "As you restore the third seal, a terrible realization dawns. The fourth and final seal isn't hidden in some distant location - it's within you. You ARE the final seal.",
    nextScene: "chapter7_final_revelation"
  },

  // Chapter 7 - The Final Confrontation
  {
    id: "chapter7_final_revelation",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The truth hits you like a physical blow. Your parents didn't just die protecting a seal - they died creating one. They bound their life force, and yours, to contain the Void Lord's essence.",
    speaker: "Gareth Lightbringer",
    speakerPortrait: getCharacterPortrait("Gareth Lightbringer"),
    nextScene: "chapter7_void_lord_speaks"
  },
  {
    id: "chapter7_void_lord_speaks",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "A voice echoes in your mind - ancient, malevolent, amused. 'Yes, little Phoenix. You begin to understand. Every time you use your power, you weaken the prison that holds me. Soon, I will be free.'",
    speaker: "Void Lord Malachar",
    speakerPortrait: getCharacterPortrait("Void Lord Malachar"),
    nextScene: "chapter7_impossible_choice"
  },
  {
    id: "chapter7_impossible_choice",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The choice becomes clear and terrible: You can sacrifice yourself to strengthen the seal permanently, or find another way to defeat the Void Lord that doesn't require your death.",
    choices: [
      {
        text: "There has to be another way. I won't let my parents' sacrifice be in vain.",
        nextScene: "chapter7_seek_alternative",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "final_choice": "alternative" }
        })
      },
      {
        text: "If my death can save the realm, then so be it. I accept my destiny.",
        nextScene: "chapter7_noble_sacrifice",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "final_choice": "sacrifice" }
        })
      },
      {
        text: "What if I could turn the Void Lord's power against itself? Use his own darkness to destroy him?",
        nextScene: "chapter7_risky_gambit",
        effect: (state) => ({
          ...state,
          choices: { ...state.choices, "final_choice": "gambit" }
        })
      }
    ]
  },
  {
    id: "chapter7_seek_alternative",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Your companions rally around you. Together, you discover that by combining all your powers - Phoenix fire, storm magic, warrior strength, shadow arts, and divine light - you can create a new kind of seal.",
    nextScene: "chapter7_combined_power"
  },
  {
    id: "chapter7_noble_sacrifice",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Your companions refuse to let you face this alone. 'If you die, we die with you,' Lyra declares. 'That's what it means to be family.' Their combined life force might be enough to create an eternal seal.",
    nextScene: "chapter7_shared_sacrifice"
  },
  {
    id: "chapter7_risky_gambit",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "It's incredibly dangerous, but you open yourself to the Void Lord's power, planning to turn it back on him. Your companions stand ready to pull you back from the brink if you go too far.",
    nextScene: "chapter7_void_battle"
  },
  {
    id: "chapter7_combined_power",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The combined power of your fellowship creates something unprecedented - a seal of pure harmony that doesn't require death to maintain. The Void Lord screams as he's banished forever.",
    nextScene: "chapter7_victory_unity"
  },
  {
    id: "chapter7_shared_sacrifice",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "But at the last moment, the Phoenix itself intervenes. Your willingness to sacrifice everything for others proves your worthiness, and the Phoenix grants you all new life as its eternal guardians.",
    nextScene: "chapter7_victory_rebirth"
  },
  {
    id: "chapter7_void_battle",
    background: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The battle rages within your very soul. For a terrifying moment, you feel yourself slipping into darkness, but your companions' voices call you back. Together, you turn the Void Lord's power against him.",
    nextScene: "chapter7_victory_triumph"
  },
  {
    id: "chapter7_victory_unity",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "The realm is saved through unity and friendship. You and your companions become the new Phoenix Order, protectors of peace and harmony. Your love interests become your partners in both life and duty.",
    nextScene: "epilogue_new_order"
  },
  {
    id: "chapter7_victory_rebirth",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "Reborn as Phoenix Guardians, you and your companions are granted immortality to protect the realm. The bonds forged in battle become eternal, and love blooms in the peace that follows.",
    nextScene: "epilogue_eternal_guardians"
  },
  {
    id: "chapter7_victory_triumph",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "Your triumph over the Void Lord becomes legend. The realm enters a golden age of peace, and you rule wisely with your chosen companion by your side, your love a beacon of hope for all.",
    nextScene: "epilogue_golden_age"
  },

  // Epilogues
  {
    id: "epilogue_new_order",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "Years pass in peace and prosperity. The new Phoenix Order, led by you and your companions, protects the realm from threats both magical and mundane. Your story becomes legend, inspiring future generations.",
    nextScene: "epilogue_final"
  },
  {
    id: "epilogue_eternal_guardians",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "As eternal guardians, you watch over the realm through the ages. Your love transcends time itself, and together you ensure that darkness never again threatens the world your parents died to protect.",
    nextScene: "epilogue_final"
  },
  {
    id: "epilogue_golden_age",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "The golden age you ushered in lasts for centuries. Your descendants carry on your legacy, and the Phoenix Champion's tale is told around hearths across the realm as a story of hope, love, and triumph.",
    nextScene: "epilogue_final"
  },
  {
    id: "epilogue_final",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeSUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    text: "And so ends the tale of the Phoenix Champion - a story of tragedy transformed into triumph, of darkness overcome by light, and of the power of friendship and love to conquer even the greatest evil. Your legend will live forever."
  }
];
