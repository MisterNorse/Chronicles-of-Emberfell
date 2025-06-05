import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Plus } from "lucide-react-native";
import Colors from "@/constants/colors";
import { Item, EquipmentSlot as SlotType } from "@/types/game";

type EquipmentSlotProps = {
  slot: SlotType;
  item?: Item;
  onPress: () => void;
  size?: "small" | "medium" | "large";
};

export default function EquipmentSlot({ 
  slot, 
  item, 
  onPress,
  size = "medium"
}: EquipmentSlotProps) {
  const getSlotName = (slot: SlotType) => {
    const names = {
      head: "Head",
      chest: "Chest",
      legs: "Legs",
      feet: "Feet",
      hands: "Hands",
      mainHand: "Main Hand",
      offHand: "Off Hand",
      ring1: "Ring",
      ring2: "Ring",
      amulet: "Amulet"
    };
    return names[slot];
  };

  const getSlotSize = () => {
    const sizes = {
      small: { width: 50, height: 50 },
      medium: { width: 60, height: 60 },
      large: { width: 70, height: 70 }
    };
    return sizes[size];
  };

  const slotSize = getSlotSize();

  return (
    <Pressable 
      style={[styles.container, slotSize]} 
      onPress={onPress}
    >
      {item ? (
        <Image
          source={{ uri: item.image }}
          style={[styles.itemImage, slotSize]}
        />
      ) : (
        <View style={[styles.emptySlot, slotSize]}>
          <Plus color={Colors.textDark} size={20} />
        </View>
      )}
      
      <View style={styles.slotLabel}>
        <Text style={styles.slotText}>{getSlotName(slot)}</Text>
      </View>
      
      {item && (
        <View style={styles.itemTooltip}>
          <Text style={styles.itemName}>{item.name}</Text>
          {item.stats && Object.entries(item.stats).map(([stat, value]) => (
            <Text key={stat} style={styles.itemStat}>
              {stat}: +{value}
            </Text>
          ))}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.backgroundLight,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    borderRadius: 6,
  },
  emptySlot: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.textDark,
    borderStyle: "dashed",
  },
  slotLabel: {
    position: "absolute",
    bottom: -20,
    left: "50%",
    transform: [{ translateX: -25 }],
    backgroundColor: Colors.background,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  slotText: {
    color: Colors.textDark,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemTooltip: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: Colors.background,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.secondary,
    minWidth: 100,
    zIndex: 10,
  },
  itemName: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemStat: {
    color: Colors.secondary,
    fontSize: 10,
  },
});