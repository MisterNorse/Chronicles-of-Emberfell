import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import Colors from "@/constants/colors";
import { Companion } from "@/types/game";
import StatBar from "./StatBar";

type CompanionCardProps = {
  companion: Companion;
  onPress: (companion: Companion) => void;
};

export default function CompanionCard({ companion, onPress }: CompanionCardProps) {
  return (
    <Pressable 
      style={styles.container} 
      onPress={() => onPress(companion)}
    >
      <Image source={{ uri: companion.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{companion.name}</Text>
        <Text style={styles.role}>{companion.role}</Text>
        <StatBar 
          label="Approval" 
          value={companion.approval} 
          maxValue={100} 
          color={getApprovalColor(companion.approval)}
        />
        {companion.romance && (
          <StatBar 
            label="Romance" 
            value={companion.romance} 
            maxValue={100} 
            color={Colors.secondary}
          />
        )}
      </View>
    </Pressable>
  );
}

function getApprovalColor(approval: number): string {
  if (approval >= 75) return Colors.success;
  if (approval >= 50) return Colors.secondary;
  if (approval >= 25) return "#FFA500"; // Orange
  return Colors.danger;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundLight,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.background,
  },
  details: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 18,
  },
  role: {
    color: Colors.textDark,
    fontSize: 14,
    marginBottom: 8,
  },
});