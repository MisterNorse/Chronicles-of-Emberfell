import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { X } from "lucide-react-native";
import Button from "@/components/Button";
import CustomSlider from "@/components/CustomSlider";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { availableCompanions } from "@/data/companions";

export default function Cheats() {
  const { 
    character, 
    companions,
    cheatAddGold,
    cheatSetStat,
    cheatSetCompanionApproval,
    cheatSetCompanionRomance,
    cheatSetLevel,
    cheatSetHealth,
    cheatSetMana
  } = useGameStore();
  
  const [goldInput, setGoldInput] = useState("1000");
  
  const handleClose = () => {
    router.back();
  };
  
  const handleAddGold = () => {
    const amount = parseInt(goldInput);
    if (!isNaN(amount) && amount > 0) {
      cheatAddGold(amount);
      Alert.alert("Success", `Added ${amount} gold!`);
    }
  };
  
  const handleQuickGold = (amount: number) => {
    cheatAddGold(amount);
    Alert.alert("Success", `Added ${amount} gold!`);
  };
  
  const handleStatChange = (stat: keyof typeof character.stats, value: number) => {
    cheatSetStat(stat, Math.round(value));
  };
  
  const handleCompanionApprovalChange = (companionId: string, value: number) => {
    cheatSetCompanionApproval(companionId, Math.round(value));
  };
  
  const handleCompanionRomanceChange = (companionId: string, value: number) => {
    cheatSetCompanionRomance(companionId, Math.round(value));
  };
  
  const handleLevelChange = (value: number) => {
    cheatSetLevel(Math.round(value));
  };
  
  const handleHealthChange = (value: number) => {
    cheatSetHealth(Math.round(value));
  };
  
  const handleManaChange = (value: number) => {
    cheatSetMana(Math.round(value));
  };
  
  // Get all companions (recruited + available for demo)
  const allCompanions = companions.length > 0 ? companions : availableCompanions;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>🎮 Cheat Menu</Text>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.text} size={24} />
        </Pressable>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Gold Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💰 Gold Management</Text>
          <Text style={styles.currentValue}>Current Gold: {character.gold}</Text>
          
          <View style={styles.goldControls}>
            <TextInput
              style={styles.goldInput}
              value={goldInput}
              onChangeText={setGoldInput}
              placeholder="Amount"
              placeholderTextColor={Colors.textDark}
              keyboardType="numeric"
            />
            <Button
              title="Add Gold"
              onPress={handleAddGold}
              size="small"
              style={styles.goldButton}
            />
          </View>
          
          <View style={styles.quickButtons}>
            <Button title="+100" onPress={() => handleQuickGold(100)} size="small" style={styles.quickButton} />
            <Button title="+1K" onPress={() => handleQuickGold(1000)} size="small" style={styles.quickButton} />
            <Button title="+10K" onPress={() => handleQuickGold(10000)} size="small" style={styles.quickButton} />
            <Button title="-1K" onPress={() => handleQuickGold(-1000)} size="small" style={styles.quickButton} variant="danger" />
          </View>
        </View>
        
        {/* Character Stats Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚔️ Character Stats</Text>
          
          <CustomSlider
            label={`Level: ${character.level}`}
            value={character.level}
            minimumValue={1}
            maximumValue={50}
            onValueChange={handleLevelChange}
            style={styles.statSlider}
          />
          
          <CustomSlider
            label={`Health: ${character.health}/${character.maxHealth}`}
            value={character.health}
            minimumValue={1}
            maximumValue={character.maxHealth}
            onValueChange={handleHealthChange}
            style={styles.statSlider}
          />
          
          <CustomSlider
            label={`Mana: ${character.mana}/${character.maxMana}`}
            value={character.mana}
            minimumValue={0}
            maximumValue={character.maxMana}
            onValueChange={handleManaChange}
            style={styles.statSlider}
          />
          
          {Object.entries(character.stats).map(([stat, value]) => (
            <CustomSlider
              key={stat}
              label={`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${value}`}
              value={value}
              minimumValue={1}
              maximumValue={30}
              onValueChange={(newValue) => handleStatChange(stat as keyof typeof character.stats, newValue)}
              style={styles.statSlider}
            />
          ))}
        </View>
        
        {/* Companions Section */}
        {allCompanions.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>👥 Companion Relationships</Text>
            
            {allCompanions.map((companion) => (
              <View key={companion.id} style={styles.companionContainer}>
                <Text style={styles.companionName}>{companion.name}</Text>
                
                <CustomSlider
                  label={`Approval: ${companion.approval}`}
                  value={companion.approval}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={(value) => handleCompanionApprovalChange(companion.id, value)}
                  style={styles.companionSlider}
                />
                
                {companion.romance !== undefined && (
                  <CustomSlider
                    label={`Romance: ${companion.romance}`}
                    value={companion.romance}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={(value) => handleCompanionRomanceChange(companion.id, value)}
                    style={styles.companionSlider}
                  />
                )}
              </View>
            ))}
          </View>
        )}
        
        <View style={styles.warningSection}>
          <Text style={styles.warningText}>
            ⚠️ Warning: Using cheats may affect game balance and story progression.
          </Text>
          <Text style={styles.infoText}>
            💡 This menu is now permanently accessible from the game interface!
          </Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
  },
  closeButton: {
    position: "absolute",
    right: 20,
    top: 60,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  section: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 15,
    textAlign: "center",
  },
  currentValue: {
    fontSize: 16,
    color: Colors.text,
    textAlign: "center",
    marginBottom: 15,
  },
  goldControls: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  goldInput: {
    flex: 1,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
    color: Colors.text,
    fontSize: 16,
    marginRight: 10,
  },
  goldButton: {
    flex: 0.4,
  },
  quickButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickButton: {
    flex: 0.23,
  },
  statSlider: {
    marginBottom: 15,
  },
  companionContainer: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  companionName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 10,
    textAlign: "center",
  },
  companionSlider: {
    marginBottom: 10,
  },
  warningSection: {
    backgroundColor: "rgba(184, 50, 50, 0.2)",
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.danger,
    marginBottom: 20,
  },
  warningText: {
    color: Colors.danger,
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 8,
  },
  infoText: {
    color: Colors.success,
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});