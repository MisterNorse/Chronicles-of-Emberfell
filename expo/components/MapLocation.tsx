import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import Colors from "@/constants/colors";
import { MapLocation as MapLocationType } from "@/types/game";

type MapLocationProps = {
  location: MapLocationType;
  onPress: (location: MapLocationType) => void;
  discovered: boolean;
  current: boolean;
};

export default function MapLocation({ 
  location, 
  onPress, 
  discovered,
  current
}: MapLocationProps) {
  if (!discovered && !location.startingLocation) {
    return (
      <Pressable 
        style={[
          styles.container, 
          styles.undiscovered,
          { top: location.position.y, left: location.position.x }
        ]}
        disabled={true}
      >
        <Text style={styles.questionMark}>?</Text>
      </Pressable>
    );
  }

  return (
    <Pressable 
      style={[
        styles.container, 
        current ? styles.current : null,
        { top: location.position.y, left: location.position.x }
      ]}
      onPress={() => onPress(location)}
    >
      <Image source={{ uri: location.icon }} style={styles.icon} />
      <Text style={styles.name}>{location.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    width: 60,
  },
  undiscovered: {
    opacity: 0.6,
  },
  current: {
    transform: [{ scale: 1.2 }],
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.backgroundLight,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  name: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 4,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  questionMark: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.backgroundLight,
    borderWidth: 2,
    borderColor: Colors.textDark,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.textDark,
    fontSize: 20,
    fontWeight: "bold",
  },
});