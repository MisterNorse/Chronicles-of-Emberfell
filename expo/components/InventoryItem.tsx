import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import Colors from "@/constants/colors";
import { Item } from "@/types/game";

type InventoryItemProps = {
  item: Item;
  onPress: (item: Item) => void;
};

export default function InventoryItem({ item, onPress }: InventoryItemProps) {
  return (
    <Pressable 
      style={styles.container} 
      onPress={() => onPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        {item.quantity > 1 && (
          <View style={styles.quantityBadge}>
            <Text style={styles.quantityText}>{item.quantity}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.background,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: Colors.textDark,
    fontSize: 14,
    marginTop: 4,
  },
  quantityBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    color: Colors.background,
    fontWeight: "bold",
    fontSize: 12,
  },
});