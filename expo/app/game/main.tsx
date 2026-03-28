import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Image } from "expo-image";
import { Book, Map, Backpack, User, Users, Settings, Save } from "lucide-react-native";
import DialogBox from "@/components/DialogBox";
import ChoiceButton from "@/components/ChoiceButton";
import BackgroundImage from "@/components/BackgroundImage";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { useCombatStore } from "@/store/combatStore";
import { StoryScene } from "@/types/game";
import { getCharacterPortrait } from "@/data/characterPortraits";

export default function GameMain() {
  const { 
    getCurrentScene, 
    advanceStory, 
    makeChoice,
    character,
    cheatsUnlocked
  } = useGameStore();
  
  const { inCombat } = useCombatStore();
  
  const [currentScene, setCurrentScene] = useState<StoryScene | null>(null);
  const [showChoices, setShowChoices] = useState(false);
  
  useEffect(() => {
    // Get the current scene from the game store
    const scene = getCurrentScene();
    setCurrentScene(scene);
    setShowChoices(!!scene.choices);
  }, [getCurrentScene]);
  
  const handleContinue = () => {
    if (!currentScene) return;
    
    if (currentScene.choices) {
      setShowChoices(true);
    } else if (currentScene.nextScene) {
      advanceStory();
      const nextScene = getCurrentScene();
      setCurrentScene(nextScene);
      setShowChoices(!!nextScene.choices);
    }
  };
  
  const handleChoice = (choiceIndex: number) => {
    if (!currentScene || !currentScene.choices) return;
    
    const choice = currentScene.choices[choiceIndex];
    
    // Apply any effects from the choice
    if (choice.effect) {
      choice.effect(useGameStore.getState());
    }
    
    // Record the choice
    makeChoice(currentScene.id, choice.text);
    
    // Advance to the next scene
    advanceStory();
    const nextScene = getCurrentScene();
    setCurrentScene(nextScene);
    setShowChoices(false);
  };
  
  const openInventory = () => {
    router.push("/game/inventory");
  };
  
  const openCharacter = () => {
    router.push("/game/character");
  };
  
  const openMap = () => {
    router.push("/game/map");
  };
  
  const openQuests = () => {
    router.push("/game/quests");
  };
  
  const openCompanions = () => {
    router.push("/game/companions");
  };
  
  const openCheats = () => {
    router.push("/game/cheats");
  };
  
  const openSettings = () => {
    router.push("/game/settings");
  };
  
  const openSave = () => {
    router.push("/game/save");
  };
  
  if (!currentScene) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  
  if (inCombat) {
    router.replace("/game/combat");
    return null;
  }

  // Get speaker portrait
  const speakerPortrait = currentScene.speaker ? 
    currentScene.speakerPortrait || getCharacterPortrait(currentScene.speaker) : 
    undefined;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <BackgroundImage source={currentScene.background}>
        {/* Character Status Bar */}
        <View style={styles.statusBar}>
          <View style={styles.characterInfo}>
            <Text style={styles.characterName}>{character.name}</Text>
            <Text style={styles.characterLevel}>Level {character.level}</Text>
          </View>
          
          <View style={styles.healthBar}>
            <View style={[styles.healthFill, { width: `${(character.health / character.maxHealth) * 100}%` }]} />
          </View>
          
          <View style={styles.goldContainer}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGNvaW58ZW58MHx8MHx8fDA%3D" }}
              style={styles.goldIcon}
            />
            <Text style={styles.goldText}>{character.gold}</Text>
          </View>
        </View>
        
        {/* Game Menu */}
        <View style={styles.gameMenu}>
          <Pressable style={styles.menuButton} onPress={openInventory}>
            <Backpack color={Colors.text} size={24} />
          </Pressable>
          
          <Pressable style={styles.menuButton} onPress={openCharacter}>
            <User color={Colors.text} size={24} />
          </Pressable>
          
          <Pressable style={styles.menuButton} onPress={openMap}>
            <Map color={Colors.text} size={24} />
          </Pressable>
          
          <Pressable style={styles.menuButton} onPress={openQuests}>
            <Book color={Colors.text} size={24} />
          </Pressable>
          
          <Pressable style={styles.menuButton} onPress={openCompanions}>
            <Users color={Colors.text} size={24} />
          </Pressable>
          
          <Pressable style={styles.menuButton} onPress={openSave}>
            <Save color={Colors.dragonGold} size={24} />
          </Pressable>
          
          <Pressable style={styles.menuButton} onPress={openSettings}>
            <Settings color={Colors.text} size={24} />
          </Pressable>
          
          {cheatsUnlocked && (
            <Pressable style={[styles.menuButton, styles.cheatButton]} onPress={openCheats}>
              <Settings color={Colors.gold} size={24} />
            </Pressable>
          )}
        </View>
        
        {/* Choices */}
        {showChoices && currentScene.choices && (
          <View style={styles.choicesContainer}>
            {currentScene.choices.map((choice, index) => (
              <ChoiceButton
                key={index}
                text={choice.text}
                onPress={() => handleChoice(index)}
              />
            ))}
          </View>
        )}
        
        {/* Dialog Box */}
        <DialogBox
          text={currentScene.text}
          speaker={currentScene.speaker}
          speakerPortrait={speakerPortrait}
          onPress={handleContinue}
        />
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  loadingText: {
    color: Colors.text,
    fontSize: 18,
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(26, 26, 36, 0.8)",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  characterLevel: {
    color: Colors.textDark,
    fontSize: 12,
  },
  healthBar: {
    flex: 2,
    height: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 5,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  healthFill: {
    height: "100%",
    backgroundColor: "#e74c3c",
    borderRadius: 5,
  },
  goldContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  goldIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  goldText: {
    color: Colors.gold,
    fontWeight: "bold",
  },
  gameMenu: {
    position: "absolute",
    top: 60,
    right: 10,
    backgroundColor: "rgba(26, 26, 36, 0.8)",
    borderRadius: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  menuButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cheatButton: {
    backgroundColor: "rgba(255, 215, 0, 0.1)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.gold,
  },
  choicesContainer: {
    position: "absolute",
    bottom: 160,
    left: 20,
    right: 20,
  },
});