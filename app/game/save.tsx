import { View, Text, StyleSheet, TextInput, Pressable, Alert, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import { router } from "expo-router";
import { X, Camera, Save } from "lucide-react-native";
import { captureRef } from "react-native-view-shot";
import { Platform } from "react-native";
import Button from "@/components/Button";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";

export default function SaveGame() {
  const [saveName, setSaveName] = useState("");
  const [isCapturing, setIsCapturing] = useState(false);
  const viewRef = useRef<View>(null);
  
  const { saveGame, character, currentLocation, currentPlaytime } = useGameStore();
  
  const formatPlaytime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  
  const captureScreenshot = async () => {
    if (Platform.OS === 'web') {
      return undefined; // Skip screenshot on web
    }
    
    try {
      setIsCapturing(true);
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 0.8,
        width: 300,
        height: 200,
      });
      return uri;
    } catch (error) {
      console.log("Screenshot capture failed:", error);
      return undefined;
    } finally {
      setIsCapturing(false);
    }
  };
  
  const handleSave = async () => {
    if (!saveName.trim()) {
      Alert.alert("Error", "Please enter a name for your save.");
      return;
    }
    
    try {
      const screenshot = await captureScreenshot();
      await saveGame(saveName.trim(), screenshot);
      
      Alert.alert(
        "Game Saved!",
        `Your progress has been saved as "${saveName.trim()}".`,
        [
          {
            text: "OK",
            onPress: () => router.back()
          }
        ]
      );
    } catch (error) {
      Alert.alert("Error", "Failed to save game. Please try again.");
    }
  };
  
  const handleBack = () => {
    router.back();
  };
  
  const generateSaveName = () => {
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSaveName(`${character.name} - ${dateStr} ${timeStr}`);
  };

  return (
    <View style={styles.container} ref={viewRef}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.dragonRed, Colors.dragonShadow, Colors.dragonScale]}
        style={styles.background}
      />
      
      {/* Dragon Scale Pattern Overlay */}
      <View style={styles.scalePattern} />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.closeButton} onPress={handleBack}>
          <X color={Colors.dragonGold} size={24} />
        </Pressable>
        <Text style={styles.title}>Save Game</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Dragon Emblem */}
        <View style={styles.emblem}>
          <Text style={styles.emblemText}>🐉</Text>
          <Text style={styles.emblemSubtext}>Chronicle of Adventures</Text>
        </View>
        
        {/* Current Game Info */}
        <View style={styles.gameInfo}>
          <Text style={styles.infoTitle}>Current Progress</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Character:</Text>
            <Text style={styles.infoValue}>{character.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Level:</Text>
            <Text style={styles.infoValue}>{character.level}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>{currentLocation}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Playtime:</Text>
            <Text style={styles.infoValue}>{formatPlaytime(currentPlaytime)}</Text>
          </View>
        </View>
        
        {/* Save Name Input */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Save Name</Text>
          <TextInput
            style={styles.textInput}
            value={saveName}
            onChangeText={setSaveName}
            placeholder="Enter save name..."
            placeholderTextColor={Colors.textDark}
            maxLength={50}
          />
          <Button
            title="Generate Name"
            variant="outline"
            onPress={generateSaveName}
            style={styles.generateButton}
            size="small"
          />
        </View>
        
        {/* Screenshot Info */}
        <View style={styles.screenshotInfo}>
          <Camera color={Colors.dragonGold} size={24} />
          <Text style={styles.screenshotText}>
            {Platform.OS === 'web' 
              ? "Screenshots not available on web" 
              : "A screenshot will be captured automatically"}
          </Text>
        </View>
        
        {/* Save Button */}
        <Button
          title={isCapturing ? "Capturing..." : "Save Game"}
          onPress={handleSave}
          disabled={isCapturing || !saveName.trim()}
          style={styles.saveButton}
          icon={<Save color={Colors.text} size={20} />}
        />
        
        {/* Dragon Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>May your legend endure through the ages</Text>
        </View>
      </ScrollView>
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
  scalePattern: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: "transparent",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.dragonGold,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.dragonGold,
    textShadowColor: Colors.dragonShadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  emblem: {
    alignItems: "center",
    marginBottom: 30,
  },
  emblemText: {
    fontSize: 60,
    marginBottom: 10,
  },
  emblemSubtext: {
    fontSize: 16,
    color: Colors.dragonGold,
    fontStyle: "italic",
    textShadowColor: Colors.dragonShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  gameInfo: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: Colors.dragonGold,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dragonGold,
    marginBottom: 15,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: Colors.textDark,
  },
  infoValue: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "bold",
  },
  inputSection: {
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dragonGold,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderWidth: 2,
    borderColor: Colors.dragonGold,
    borderRadius: 8,
    padding: 15,
    color: Colors.text,
    fontSize: 16,
    marginBottom: 10,
  },
  generateButton: {
    borderColor: Colors.dragonGold,
  },
  screenshotInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
  },
  screenshotText: {
    flex: 1,
    color: Colors.textDark,
    fontSize: 14,
    marginLeft: 10,
  },
  saveButton: {
    marginBottom: 30,
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    color: Colors.dragonGold,
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },
});