import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Clock, MapPin, Trash2 } from "lucide-react-native";
import Colors from "@/constants/colors";
import { SaveGame } from "@/types/game";
import Button from "./Button";

interface SaveGameCardProps {
  save: SaveGame;
  onLoad: (saveId: string) => void;
  onDelete: (saveId: string, saveName: string) => void;
}

export default function SaveGameCard({ save, onLoad, onDelete }: SaveGameCardProps) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatPlaytime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <View style={styles.container}>
      {/* Screenshot */}
      <View style={styles.screenshotContainer}>
        {save.screenshot ? (
          <Image
            source={{ uri: save.screenshot }}
            style={styles.screenshot}
            contentFit="cover"
          />
        ) : (
          <View style={styles.noScreenshot}>
            <Text style={styles.noScreenshotText}>🐉</Text>
          </View>
        )}
      </View>
      
      {/* Save Info */}
      <View style={styles.saveInfo}>
        <Text style={styles.saveName}>{save.name}</Text>
        
        <View style={styles.saveDetails}>
          <View style={styles.detailRow}>
            <Clock color={Colors.dragonGold} size={16} />
            <Text style={styles.detailText}>{formatDate(save.timestamp)}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <MapPin color={Colors.dragonGold} size={16} />
            <Text style={styles.detailText}>{save.location}</Text>
          </View>
          
          <Text style={styles.characterInfo}>
            {save.gameState.character.name} - Level {save.gameState.character.level}
          </Text>
          
          <Text style={styles.playtime}>
            Playtime: {formatPlaytime(save.playtime)}
          </Text>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Load"
            onPress={() => onLoad(save.id)}
            style={styles.loadButton}
            size="small"
          />
          <Pressable
            style={styles.deleteButton}
            onPress={() => onDelete(save.id, save.name)}
          >
            <Trash2 color={Colors.dragonBlood} size={20} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.dragonGold,
    overflow: "hidden",
    flexDirection: "row",
  },
  screenshotContainer: {
    width: 120,
    height: 120,
  },
  screenshot: {
    width: "100%",
    height: "100%",
  },
  noScreenshot: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.dragonScale,
    alignItems: "center",
    justifyContent: "center",
  },
  noScreenshotText: {
    fontSize: 40,
  },
  saveInfo: {
    flex: 1,
    padding: 15,
  },
  saveName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dragonGold,
    marginBottom: 10,
  },
  saveDetails: {
    flex: 1,
    gap: 5,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  detailText: {
    fontSize: 14,
    color: Colors.textDark,
  },
  characterInfo: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "bold",
    marginTop: 5,
  },
  playtime: {
    fontSize: 12,
    color: Colors.textDark,
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  loadButton: {
    backgroundColor: Colors.dragonGold,
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: "rgba(220, 20, 60, 0.2)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.dragonBlood,
  },
});