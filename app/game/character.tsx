import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Image } from "expo-image";
import { X } from "lucide-react-native";
import StatBar from "@/components/StatBar";
import CharacterStat from "@/components/CharacterStat";
import EquipmentSlot from "@/components/EquipmentSlot";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { EquipmentSlot as SlotType } from "@/types/game";

export default function Character() {
  const { character, inventory, equipItem, unequipItem } = useGameStore();
  
  const getEquippedItemForSlot = (slot: SlotType) => {
    return inventory.find(item => item.equipped && item.slot === slot);
  };
  
  const handleSlotPress = (slot: SlotType) => {
    const equippedItem = getEquippedItemForSlot(slot);
    if (equippedItem) {
      unequipItem(equippedItem.id);
    } else {
      // Find first available item for this slot
      const availableItem = inventory.find(item => 
        item.slot === slot && !item.equipped && item.equippable
      );
      if (availableItem) {
        equipItem(availableItem.id);
      }
    }
  };
  
  const handleClose = () => {
    router.back();
  };
  
  const calculateModifier = (statValue: number) => {
    return Math.floor((statValue - 10) / 2);
  };
  
  const getExperienceToNextLevel = () => {
    return character.level * 1000;
  };

  const getTotalStats = () => {
    const baseStats = { ...character.stats };
    const equippedItems = inventory.filter(item => item.equipped);
    
    equippedItems.forEach(item => {
      if (item.stats) {
        Object.entries(item.stats).forEach(([stat, value]) => {
          if (baseStats[stat as keyof typeof baseStats] !== undefined) {
            baseStats[stat as keyof typeof baseStats] += value;
          }
        });
      }
    });
    
    return baseStats;
  };

  const totalStats = getTotalStats();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>Character</Text>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.text} size={24} />
        </Pressable>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.characterLayout}>
          {/* Left Equipment Column */}
          <View style={styles.leftEquipment}>
            <EquipmentSlot
              slot="head"
              item={getEquippedItemForSlot("head")}
              onPress={() => handleSlotPress("head")}
            />
            <EquipmentSlot
              slot="amulet"
              item={getEquippedItemForSlot("amulet")}
              onPress={() => handleSlotPress("amulet")}
              size="small"
            />
            <EquipmentSlot
              slot="chest"
              item={getEquippedItemForSlot("chest")}
              onPress={() => handleSlotPress("chest")}
            />
            <EquipmentSlot
              slot="hands"
              item={getEquippedItemForSlot("hands")}
              onPress={() => handleSlotPress("hands")}
            />
            <EquipmentSlot
              slot="ring1"
              item={getEquippedItemForSlot("ring1")}
              onPress={() => handleSlotPress("ring1")}
              size="small"
            />
          </View>
          
          {/* Center Character */}
          <View style={styles.centerCharacter}>
            <View style={styles.characterPortrait}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" }}
                style={styles.characterImage}
              />
              <LinearGradient
                colors={[Colors.primary + "40", Colors.secondary + "40"]}
                style={styles.characterGlow}
              />
            </View>
            
            <View style={styles.characterInfo}>
              <Text style={styles.characterName}>{character.name}</Text>
              <Text style={styles.characterDetails}>
                Level {character.level} {character.race} {character.class}
              </Text>
              <Text style={styles.characterReligion}>
                Follower of {character.religion}
              </Text>
            </View>
            
            <View style={styles.statusBars}>
              <StatBar
                label="Health"
                value={character.health}
                maxValue={character.maxHealth}
                color="#e74c3c"
              />
              
              <StatBar
                label="Mana"
                value={character.mana}
                maxValue={character.maxMana}
                color="#3498db"
              />
              
              <StatBar
                label="Experience"
                value={character.experience}
                maxValue={getExperienceToNextLevel()}
                color="#f39c12"
              />
            </View>
          </View>
          
          {/* Right Equipment Column */}
          <View style={styles.rightEquipment}>
            <EquipmentSlot
              slot="mainHand"
              item={getEquippedItemForSlot("mainHand")}
              onPress={() => handleSlotPress("mainHand")}
            />
            <EquipmentSlot
              slot="offHand"
              item={getEquippedItemForSlot("offHand")}
              onPress={() => handleSlotPress("offHand")}
            />
            <EquipmentSlot
              slot="legs"
              item={getEquippedItemForSlot("legs")}
              onPress={() => handleSlotPress("legs")}
            />
            <EquipmentSlot
              slot="feet"
              item={getEquippedItemForSlot("feet")}
              onPress={() => handleSlotPress("feet")}
            />
            <EquipmentSlot
              slot="ring2"
              item={getEquippedItemForSlot("ring2")}
              onPress={() => handleSlotPress("ring2")}
              size="small"
            />
          </View>
        </View>
        
        <View style={styles.bottomSection}>
          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Attributes</Text>
            <View style={styles.statsGrid}>
              <CharacterStat
                label="Strength"
                value={totalStats.strength}
                modifier={calculateModifier(totalStats.strength)}
              />
              
              <CharacterStat
                label="Intelligence"
                value={totalStats.intelligence}
                modifier={calculateModifier(totalStats.intelligence)}
              />
              
              <CharacterStat
                label="Dexterity"
                value={totalStats.dexterity}
                modifier={calculateModifier(totalStats.dexterity)}
              />
              
              <CharacterStat
                label="Constitution"
                value={totalStats.constitution}
                modifier={calculateModifier(totalStats.constitution)}
              />
              
              <CharacterStat
                label="Charisma"
                value={totalStats.charisma}
                modifier={calculateModifier(totalStats.charisma)}
              />
            </View>
          </View>
          
          <View style={styles.goldSection}>
            <Text style={styles.sectionTitle}>Gold</Text>
            <View style={styles.goldContainer}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGNvaW58ZW58MHx8MHx8fDA%3D" }}
                style={styles.goldIcon}
              />
              <Text style={styles.goldAmount}>{character.gold}</Text>
            </View>
          </View>
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
  },
  characterLayout: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  leftEquipment: {
    alignItems: "center",
    gap: 25,
    flex: 1,
  },
  rightEquipment: {
    alignItems: "center",
    gap: 25,
    flex: 1,
  },
  centerCharacter: {
    alignItems: "center",
    flex: 2,
    paddingHorizontal: 20,
  },
  characterPortrait: {
    position: "relative",
    marginBottom: 20,
  },
  characterImage: {
    width: 150,
    height: 200,
    borderRadius: 12,
    backgroundColor: Colors.backgroundLight,
    borderWidth: 3,
    borderColor: Colors.secondary,
  },
  characterGlow: {
    position: "absolute",
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    borderRadius: 17,
    zIndex: -1,
  },
  characterInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  characterName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  characterDetails: {
    fontSize: 16,
    color: Colors.textDark,
    marginBottom: 4,
  },
  characterReligion: {
    fontSize: 14,
    color: Colors.textDark,
    fontStyle: "italic",
  },
  statusBars: {
    width: "100%",
    gap: 10,
  },
  bottomSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.backgroundLight,
  },
  statsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 15,
    textAlign: "center",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  goldSection: {
    alignItems: "center",
  },
  goldContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
  },
  goldIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  goldAmount: {
    color: Colors.gold,
    fontSize: 18,
    fontWeight: "bold",
  },
});