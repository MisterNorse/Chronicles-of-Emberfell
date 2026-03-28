import { View, Text, StyleSheet, Switch, Pressable, Alert, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "@/components/Button";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";

const CHEAT_PASSWORD = "Fortes Fortuna";

export default function Settings() {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  
  const { resetGame, unlockCheats, cheatsUnlocked } = useGameStore();
  
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
            AsyncStorage.removeItem("fantasy-game-storage");
            router.replace("/");
          }
        }
      ]
    );
  };
  
  const handleCheatAccess = () => {
    if (passwordInput === CHEAT_PASSWORD) {
      unlockCheats();
      setPasswordInput("");
      setShowPasswordInput(false);
      Alert.alert(
        "Developer Tools Unlocked!", 
        "Cheat menu is now available in the game interface.",
        [
          {
            text: "OK",
            onPress: () => router.push("/game/cheats")
          }
        ]
      );
    } else {
      Alert.alert("Access Denied", "Incorrect password.");
      setPasswordInput("");
    }
  };
  
  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      
      <View style={styles.settingsContainer}>
        <View style={styles.settingGroup}>
          <Text style={styles.groupTitle}>Audio</Text>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Music</Text>
            <Switch
              value={musicEnabled}
              onValueChange={setMusicEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.primary }}
              thumbColor={musicEnabled ? Colors.secondary : Colors.textDark}
            />
          </View>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Sound Effects</Text>
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.primary }}
              thumbColor={soundEnabled ? Colors.secondary : Colors.textDark}
            />
          </View>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Vibration</Text>
            <Switch
              value={vibrationEnabled}
              onValueChange={setVibrationEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.primary }}
              thumbColor={vibrationEnabled ? Colors.secondary : Colors.textDark}
            />
          </View>
        </View>
        
        <View style={styles.settingGroup}>
          <Text style={styles.groupTitle}>Game</Text>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Auto-Save</Text>
            <Switch
              value={autoSaveEnabled}
              onValueChange={setAutoSaveEnabled}
              trackColor={{ false: Colors.backgroundLight, true: Colors.primary }}
              thumbColor={autoSaveEnabled ? Colors.secondary : Colors.textDark}
            />
          </View>
        </View>
        
        <View style={styles.settingGroup}>
          <Text style={styles.groupTitle}>Developer</Text>
          
          {cheatsUnlocked ? (
            <View style={styles.unlockedContainer}>
              <Text style={styles.unlockedText}>✅ Developer Tools Unlocked</Text>
              <Button
                title="Open Cheat Menu"
                onPress={() => router.push("/game/cheats")}
                style={styles.devButton}
              />
            </View>
          ) : (
            <>
              {!showPasswordInput ? (
                <Button
                  title="Access Developer Tools"
                  variant="outline"
                  onPress={() => setShowPasswordInput(true)}
                  style={styles.devButton}
                />
              ) : (
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter password..."
                    placeholderTextColor={Colors.textDark}
                    value={passwordInput}
                    onChangeText={setPasswordInput}
                    secureTextEntry
                    autoCapitalize="words"
                  />
                  <View style={styles.passwordButtons}>
                    <Button
                      title="Cancel"
                      variant="outline"
                      size="small"
                      onPress={() => {
                        setShowPasswordInput(false);
                        setPasswordInput("");
                      }}
                      style={styles.passwordButton}
                    />
                    <Button
                      title="Access"
                      size="small"
                      onPress={handleCheatAccess}
                      style={styles.passwordButton}
                    />
                  </View>
                </View>
              )}
            </>
          )}
        </View>
        
        <View style={styles.buttonGroup}>
          <Button
            title="Reset Game Data"
            variant="outline"
            onPress={handleResetGame}
            style={styles.resetButton}
            textStyle={styles.resetButtonText}
          />
        </View>
      </View>
      
      <Button
        title="Back to Menu"
        onPress={handleBack}
        style={styles.backButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
  },
  settingsContainer: {
    width: "90%",
    flex: 1,
  },
  settingGroup: {
    marginBottom: 30,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    paddingBottom: 5,
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
  devButton: {
    marginTop: 10,
  },
  unlockedContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  unlockedText: {
    fontSize: 16,
    color: Colors.success,
    fontWeight: "bold",
    marginBottom: 10,
  },
  passwordContainer: {
    marginTop: 10,
  },
  passwordInput: {
    backgroundColor: Colors.backgroundLight,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
    color: Colors.text,
    fontSize: 16,
    marginBottom: 10,
  },
  passwordButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordButton: {
    flex: 0.48,
  },
  buttonGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  resetButton: {
    borderColor: Colors.danger,
    marginTop: 20,
  },
  resetButtonText: {
    color: Colors.danger,
  },
  backButton: {
    marginBottom: 30,
    width: "80%",
  },
});