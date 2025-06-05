import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import MenuButton from "@/components/MenuButton";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MainMenu() {
  const resetGame = useGameStore((state) => state.resetGame);
  
  // Check for saved game
  const checkSavedGame = async () => {
    try {
      const savedGame = await AsyncStorage.getItem("fantasy-game-storage");
      return savedGame !== null;
    } catch (error) {
      console.error("Error checking saved game:", error);
      return false;
    }
  };
  
  const handleNewGame = () => {
    resetGame();
    router.push("/game/character-creation");
  };
  
  const handleContinueGame = () => {
    router.push("/game/main");
  };
  
  const handleSettings = () => {
    router.push("/settings");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chronicles of Destiny</Text>
        <Text style={styles.subtitle}>A Fantasy Adventure</Text>
      </View>
      
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFudGFzeSUyMGNhc3RsZXxlbnwwfHwwfHx8MA%3D%3D" }}
        style={styles.heroImage}
      />
      
      <View style={styles.menuContainer}>
        <MenuButton
          title="New Game"
          onPress={handleNewGame}
          style={styles.menuButton}
        />
        
        <MenuButton
          title="Continue Game"
          onPress={handleContinueGame}
          style={styles.menuButton}
        />
        
        <MenuButton
          title="Settings"
          onPress={handleSettings}
          style={styles.menuButton}
        />
      </View>
      
      <Text style={styles.footer}>© 2025 Fantasy Chronicles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: Colors.primary,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.secondary,
    textAlign: "center",
  },
  heroImage: {
    width: "90%",
    height: 200,
    borderRadius: 12,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  menuContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  menuButton: {
    marginVertical: 10,
  },
  footer: {
    color: Colors.textDark,
    marginBottom: 20,
    fontSize: 12,
  },
});