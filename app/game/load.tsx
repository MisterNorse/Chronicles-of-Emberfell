import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { X, Trash2, Clock, MapPin } from "lucide-react-native";
import { Image } from "expo-image";
import Button from "@/components/Button";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";

export default function LoadGame() {
  const { savedGames, loadGame, deleteSave } = useGameStore();
  
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatPlaytime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  
  const handleLoadGame = async (saveId: string) => {
    try {
      await loadGame(saveId);
      Alert.alert(
        "Game Loaded!",
        "Your saved progress has been restored.",
        [
          {
            text: "Continue",
            onPress: () => router.replace("/game/main")
          }
        ]
      );
    } catch (error) {
      Alert.alert("Error", "Failed to load game. Please try again.");
    }
  };
  
  const handleDeleteSave = (saveId: string, saveName: string) => {
    Alert.alert(
      "Delete Save",
      `Are you sure you want to delete "${saveName}"? This action cannot be undone.`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteSave(saveId)
        }
      ]
    );
  };
  
  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.dragonShadow, Colors.dragonRed, Colors.dragonScale]}
        style={styles.background}
      />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.closeButton} onPress={handleBack}>
          <X color={Colors.dragonGold} size={24} />
        </Pressable>
        <Text style={styles.title}>Load Game</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Dragon Emblem */}
        <View style={styles.emblem}>
          <Text style={styles.emblemText}>📜</Text>
          <Text style={styles.emblemSubtext}>Tales of Old</Text>
        </View>
        
        {savedGames.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No saved games found</Text>
            <Text style={styles.emptySubtext}>Start a new adventure to create your first save</Text>
          </View>
        ) : (
          <View style={styles.savesList}>
            {savedGames.map((save) => (
              <View key={save.id} style={styles.saveCard}>
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
                      onPress={() => handleLoadGame(save.id)}
                      style={styles.loadButton}
                      size="small"
                    />
                    <Pressable
                      style={styles.deleteButton}
                      onPress={() => handleDeleteSave(save.id, save.name)}
                    >
                      <Trash2 color={Colors.dragonBlood} size={20} />
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
        
        {/* Dragon Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Choose your destiny, brave adventurer</Text>
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
  emptyState: {
    alignItems: "center",
    marginTop: 50,
    padding: 30,
  },
  emptyText: {
    fontSize: 20,
    color: Colors.textDark,
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    color: Colors.textDark,
    textAlign: "center",
  },
  savesList: {
    gap: 20,
  },
  saveCard: {
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
  footer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  footerText: {
    color: Colors.dragonGold,
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },
});