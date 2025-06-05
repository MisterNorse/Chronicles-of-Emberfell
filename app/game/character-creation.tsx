import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Image } from "expo-image";
import Button from "@/components/Button";
import CustomSlider from "@/components/CustomSlider";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { CharacterClass, CharacterRace, CharacterReligion, Gender } from "@/types/game";

export default function CharacterCreation() {
  const updateCharacter = useGameStore((state) => state.updateCharacter);
  
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender>("Male");
  const [race, setRace] = useState<CharacterRace>("Human");
  const [characterClass, setCharacterClass] = useState<CharacterClass>("Warrior");
  const [religion, setReligion] = useState<CharacterReligion>("None");
  
  const [step, setStep] = useState(1);
  const [appearance, setAppearance] = useState({
    skinTone: 0,
    hairStyle: 0,
    hairColor: 0,
    faceShape: 0,
    eyeColor: 0,
  });
  
  const [stats, setStats] = useState({
    strength: 10,
    intelligence: 10,
    dexterity: 10,
    constitution: 10,
    charisma: 10,
  });
  
  const [pointsRemaining, setPointsRemaining] = useState(5);
  
  const handleNextStep = () => {
    if (step === 1 && !name) {
      alert("Please enter a character name");
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Save character and start game
      updateCharacter({
        name,
        gender,
        race,
        class: characterClass,
        religion,
        appearance,
        stats,
      });
      
      router.replace("/game/main");
    }
  };
  
  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };
  
  const handleStatChange = (stat: keyof typeof stats, increment: boolean) => {
    if (increment && pointsRemaining > 0) {
      setStats({ ...stats, [stat]: stats[stat] + 1 });
      setPointsRemaining(pointsRemaining - 1);
    } else if (!increment && stats[stat] > 8) {
      setStats({ ...stats, [stat]: stats[stat] - 1 });
      setPointsRemaining(pointsRemaining + 1);
    }
  };
  
  const handleAppearanceChange = (key: keyof typeof appearance, value: number) => {
    setAppearance({ ...appearance, [key]: value });
  };
  
  const renderStep1 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Basic Information</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Character Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter name..."
          placeholderTextColor={Colors.textDark}
        />
      </View>
      
      <View style={styles.optionSection}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.optionsRow}>
          {["Male", "Female", "Other"].map((option) => (
            <Pressable
              key={option}
              style={[
                styles.option,
                gender === option && styles.selectedOption
              ]}
              onPress={() => setGender(option as Gender)}
            >
              <Text style={[
                styles.optionText,
                gender === option && styles.selectedOptionText
              ]}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      
      <View style={styles.optionSection}>
        <Text style={styles.label}>Race</Text>
        <View style={styles.optionsGrid}>
          {["Human", "Elf", "Dwarf", "Orc", "Halfling"].map((option) => (
            <Pressable
              key={option}
              style={[
                styles.option,
                race === option && styles.selectedOption
              ]}
              onPress={() => setRace(option as CharacterRace)}
            >
              <Text style={[
                styles.optionText,
                race === option && styles.selectedOptionText
              ]}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      
      <View style={styles.optionSection}>
        <Text style={styles.label}>Class</Text>
        <View style={styles.optionsGrid}>
          {["Warrior", "Mage", "Rogue", "Cleric", "Ranger"].map((option) => (
            <Pressable
              key={option}
              style={[
                styles.option,
                characterClass === option && styles.selectedOption
              ]}
              onPress={() => setCharacterClass(option as CharacterClass)}
            >
              <Text style={[
                styles.optionText,
                characterClass === option && styles.selectedOptionText
              ]}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      
      <View style={styles.optionSection}>
        <Text style={styles.label}>Religion</Text>
        <View style={styles.optionsGrid}>
          {["The Old Gods", "The Divine Light", "Nature's Path", "The Void", "None"].map((option) => (
            <Pressable
              key={option}
              style={[
                styles.option,
                religion === option && styles.selectedOption
              ]}
              onPress={() => setReligion(option as CharacterReligion)}
            >
              <Text style={[
                styles.optionText,
                religion === option && styles.selectedOptionText
              ]}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
  
  const renderStep2 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Appearance</Text>
      
      <View style={styles.characterPreview}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" }}
          style={styles.characterImage}
        />
      </View>
      
      <Text style={styles.appearanceNote}>
        Note: This is a simplified character creation. Your character's appearance will be represented by icons and descriptions in the game.
      </Text>
      
      <CustomSlider
        label="Skin Tone"
        value={appearance.skinTone}
        minimumValue={0}
        maximumValue={4}
        onValueChange={(value) => handleAppearanceChange("skinTone", value)}
        style={styles.appearanceSlider}
      />
      
      <CustomSlider
        label="Hair Style"
        value={appearance.hairStyle}
        minimumValue={0}
        maximumValue={4}
        onValueChange={(value) => handleAppearanceChange("hairStyle", value)}
        style={styles.appearanceSlider}
      />
      
      <CustomSlider
        label="Hair Color"
        value={appearance.hairColor}
        minimumValue={0}
        maximumValue={4}
        onValueChange={(value) => handleAppearanceChange("hairColor", value)}
        style={styles.appearanceSlider}
      />
      
      <CustomSlider
        label="Eye Color"
        value={appearance.eyeColor}
        minimumValue={0}
        maximumValue={4}
        onValueChange={(value) => handleAppearanceChange("eyeColor", value)}
        style={styles.appearanceSlider}
      />
    </View>
  );
  
  const renderStep3 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Character Stats</Text>
      <Text style={styles.pointsRemaining}>Points Remaining: {pointsRemaining}</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Strength</Text>
          <View style={styles.statControls}>
            <Pressable
              style={[styles.statButton, stats.strength <= 8 && styles.disabledButton]}
              onPress={() => handleStatChange("strength", false)}
              disabled={stats.strength <= 8}
            >
              <Text style={styles.statButtonText}>-</Text>
            </Pressable>
            <Text style={styles.statValue}>{stats.strength}</Text>
            <Pressable
              style={[styles.statButton, pointsRemaining <= 0 && styles.disabledButton]}
              onPress={() => handleStatChange("strength", true)}
              disabled={pointsRemaining <= 0}
            >
              <Text style={styles.statButtonText}>+</Text>
            </Pressable>
          </View>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Intelligence</Text>
          <View style={styles.statControls}>
            <Pressable
              style={[styles.statButton, stats.intelligence <= 8 && styles.disabledButton]}
              onPress={() => handleStatChange("intelligence", false)}
              disabled={stats.intelligence <= 8}
            >
              <Text style={styles.statButtonText}>-</Text>
            </Pressable>
            <Text style={styles.statValue}>{stats.intelligence}</Text>
            <Pressable
              style={[styles.statButton, pointsRemaining <= 0 && styles.disabledButton]}
              onPress={() => handleStatChange("intelligence", true)}
              disabled={pointsRemaining <= 0}
            >
              <Text style={styles.statButtonText}>+</Text>
            </Pressable>
          </View>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Dexterity</Text>
          <View style={styles.statControls}>
            <Pressable
              style={[styles.statButton, stats.dexterity <= 8 && styles.disabledButton]}
              onPress={() => handleStatChange("dexterity", false)}
              disabled={stats.dexterity <= 8}
            >
              <Text style={styles.statButtonText}>-</Text>
            </Pressable>
            <Text style={styles.statValue}>{stats.dexterity}</Text>
            <Pressable
              style={[styles.statButton, pointsRemaining <= 0 && styles.disabledButton]}
              onPress={() => handleStatChange("dexterity", true)}
              disabled={pointsRemaining <= 0}
            >
              <Text style={styles.statButtonText}>+</Text>
            </Pressable>
          </View>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Constitution</Text>
          <View style={styles.statControls}>
            <Pressable
              style={[styles.statButton, stats.constitution <= 8 && styles.disabledButton]}
              onPress={() => handleStatChange("constitution", false)}
              disabled={stats.constitution <= 8}
            >
              <Text style={styles.statButtonText}>-</Text>
            </Pressable>
            <Text style={styles.statValue}>{stats.constitution}</Text>
            <Pressable
              style={[styles.statButton, pointsRemaining <= 0 && styles.disabledButton]}
              onPress={() => handleStatChange("constitution", true)}
              disabled={pointsRemaining <= 0}
            >
              <Text style={styles.statButtonText}>+</Text>
            </Pressable>
          </View>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Charisma</Text>
          <View style={styles.statControls}>
            <Pressable
              style={[styles.statButton, stats.charisma <= 8 && styles.disabledButton]}
              onPress={() => handleStatChange("charisma", false)}
              disabled={stats.charisma <= 8}
            >
              <Text style={styles.statButtonText}>-</Text>
            </Pressable>
            <Text style={styles.statValue}>{stats.charisma}</Text>
            <Pressable
              style={[styles.statButton, pointsRemaining <= 0 && styles.disabledButton]}
              onPress={() => handleStatChange("charisma", true)}
              disabled={pointsRemaining <= 0}
            >
              <Text style={styles.statButtonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      
      <View style={styles.classBonus}>
        <Text style={styles.classBonusTitle}>Class Bonuses:</Text>
        <Text style={styles.classBonusText}>
          {characterClass === "Warrior" && "+2 Strength, +1 Constitution"}
          {characterClass === "Mage" && "+2 Intelligence, +1 Charisma"}
          {characterClass === "Rogue" && "+2 Dexterity, +1 Charisma"}
          {characterClass === "Cleric" && "+2 Charisma, +1 Intelligence"}
          {characterClass === "Ranger" && "+2 Dexterity, +1 Strength"}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>Character Creation</Text>
        <View style={styles.progressContainer}>
          {[1, 2, 3].map((s) => (
            <View 
              key={s} 
              style={[
                styles.progressDot,
                s === step && styles.activeProgressDot,
                s < step && styles.completedProgressDot
              ]} 
            />
          ))}
        </View>
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          variant="outline"
          onPress={handlePreviousStep}
          style={styles.button}
        />
        <Button
          title={step === 3 ? "Start Game" : "Next"}
          onPress={handleNextStep}
          style={styles.button}
        />
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
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.backgroundLight,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.textDark,
  },
  activeProgressDot: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    transform: [{ scale: 1.2 }],
  },
  completedProgressDot: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  stepContainer: {
    padding: 20,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    padding: 12,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  optionSection: {
    marginBottom: 20,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  option: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    width: "48%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.textDark,
  },
  selectedOption: {
    backgroundColor: Colors.primary,
    borderColor: Colors.secondary,
  },
  optionText: {
    color: Colors.text,
  },
  selectedOptionText: {
    color: Colors.text,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  characterPreview: {
    alignItems: "center",
    marginBottom: 20,
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: Colors.backgroundLight,
    borderWidth: 3,
    borderColor: Colors.secondary,
  },
  appearanceNote: {
    color: Colors.textDark,
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
  },
  appearanceSlider: {
    marginBottom: 15,
  },
  pointsRemaining: {
    color: Colors.secondary,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 20,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: Colors.backgroundLight,
    padding: 12,
    borderRadius: 8,
  },
  statLabel: {
    color: Colors.text,
    fontSize: 16,
  },
  statControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  statButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: Colors.backgroundLight,
    borderWidth: 1,
    borderColor: Colors.textDark,
  },
  statButtonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  statValue: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
    width: 30,
    textAlign: "center",
  },
  classBonus: {
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.secondary,
  },
  classBonusTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  classBonusText: {
    color: Colors.textDark,
    fontSize: 14,
  },
});