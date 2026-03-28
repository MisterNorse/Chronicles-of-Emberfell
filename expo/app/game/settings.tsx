import { View, Text, StyleSheet, Switch, Pressable, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { router } from "expo-router";
import { X, Save, Download, RotateCcw } from "lucide-react-native";
import Button from "@/components/Button";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";

export default function GameSettings() {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  
  const { resetGame, cheatsUnlocked } = useGameStore();
  
  const handleResetGame = () => {
    Alert.alert(
      "Reset Game",
      "Are you sure you want to reset your game? All progress will be lost.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            resetGame();
            router.replace("/");
          }
        }
      ]
    );
  };
  
  const handleSaveGame = () => {
    router.push("/game/save");
  };
  
  const handleLoadGame = () => {
    router.push("/game/load");
  };
  
  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.dragonShadow, Colors.background, Colors.dragonScale]}
        style={styles.background}
      />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.closeButton} onPress={handleBack}>
          <X color={Colors.text} size={24} />
        </Pressable>
        <Text style={styles.title}>Game Settings</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        {/* Save/Load Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Data</Text>
          <View style={styles.buttonRow}>
            <Button
              title="Save Game"
              onPress={handleSaveGame}
              style={[styles.actionButton, styles.saveButton]}
              icon={<Save color={Colors.text} size={20} />}
            />
            <Button
              title="Load Game"
              onPress={handleLoadGame}
              style={[styles.actionButton, styles.loadButton]}
              icon={<Download color={Colors.text} size={20} />}
            />
          </View>
        </View>
        
        {/* Audio Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Audio</Text>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Music</Text>
            <Switch
              value={musicEnabled}
              onValueChange={setMusicEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.dragonGold }}
              thumbColor={musicEnabled ? Colors.dragonFlame : Colors.textDark}
            />
          </View>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Sound Effects</Text>
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.dragonGold }}
              thumbColor={soundEnabled ? Colors.dragonFlame : Colors.textDark}
            />
          </View>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Vibration</Text>
            <Switch
              value={vibrationEnabled}
              onValueChange={setVibrationEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.dragonGold }}
              thumbColor={vibrationEnabled ? Colors.dragonFlame : Colors.textDark}
            />
          </View>
        </View>
        
        {/* Game Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gameplay</Text>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Auto-Save</Text>
            <Switch
              value={autoSaveEnabled}
              onValueChange={setAutoSaveEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.dragonGold }}
              thumbColor={autoSaveEnabled ? Colors.dragonFlame : Colors.textDark}
            />
          </View>
        </View>
        
        {/* Developer Tools */}
        {cheatsUnlocked && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Developer Tools</Text>
            <Button
              title="Open Cheat Menu"
              onPress={() => router.push("/game/cheats")}
              style={styles.cheatButton}
            />
          </View>
        )}
        
        {/* Danger Zone */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.dangerTitle]}>Danger Zone</Text>
          <Button
            title="Reset Game Data"
            variant="outline"
            onPress={handleResetGame}
            style={styles.resetButton}
            textStyle={styles.resetButtonText}
            icon={<RotateCcw color={Colors.danger} size={20} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.dragonGold,
  },
  closeButton: {
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dragonGold,
    textShadowColor: Colors.dragonShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.dragonScale,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dragonGold,
    marginBottom: 15,
    textShadowColor: Colors.dragonShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  dangerTitle: {
    color: Colors.dragonBlood,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: Colors.dragonGold,
  },
  loadButton: {
    backgroundColor: Colors.dragonScale,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  settingLabel: {
    fontSize: 16,
    color: Colors.text,
  },
  cheatButton: {
    backgroundColor: Colors.dragonEmber,
  },
  resetButton: {
    borderColor: Colors.dragonBlood,
  },
  resetButtonText: {
    color: Colors.dragonBlood,
  },
});