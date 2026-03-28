import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Modal, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { X } from "lucide-react-native";
import CompanionCard from "@/components/CompanionCard";
import CharacterStat from "@/components/CharacterStat";
import StatBar from "@/components/StatBar";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { Companion } from "@/types/game";
import { availableCompanions } from "@/data/companions";

export default function Companions() {
  const { companions } = useGameStore();
  
  const [selectedCompanion, setSelectedCompanion] = useState<Companion | null>(null);
  
  const handleCompanionPress = (companion: Companion) => {
    setSelectedCompanion(companion);
  };
  
  const handleClose = () => {
    router.back();
  };
  
  // For demo purposes, show available companions if none in party
  const displayCompanions = companions.length > 0 ? companions : availableCompanions;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>Companions</Text>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.text} size={24} />
        </Pressable>
      </View>
      
      {companions.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            You have not recruited any companions yet.
          </Text>
          <Text style={styles.emptySubtext}>
            As you progress through the story, you will meet potential allies who may join your cause.
          </Text>
        </View>
      ) : (
        <FlatList
          data={displayCompanions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CompanionCard companion={item} onPress={handleCompanionPress} />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
      
      {/* Companion Detail Modal */}
      <Modal
        visible={selectedCompanion !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedCompanion(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedCompanion && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedCompanion.name}</Text>
                  <Pressable onPress={() => setSelectedCompanion(null)}>
                    <X color={Colors.text} size={20} />
                  </Pressable>
                </View>
                
                <ScrollView style={styles.modalScroll}>
                  <Text style={styles.companionRole}>{selectedCompanion.role}</Text>
                  
                  <Text style={styles.companionDescription}>
                    {selectedCompanion.description}
                  </Text>
                  
                  <View style={styles.relationshipContainer}>
                    <Text style={styles.sectionTitle}>Relationship</Text>
                    
                    <StatBar
                      label="Approval"
                      value={selectedCompanion.approval}
                      maxValue={100}
                      color={getApprovalColor(selectedCompanion.approval)}
                    />
                    
                    {selectedCompanion.romance !== undefined && (
                      <StatBar
                        label="Romance"
                        value={selectedCompanion.romance}
                        maxValue={100}
                        color={Colors.secondary}
                      />
                    )}
                  </View>
                  
                  <View style={styles.statsContainer}>
                    <Text style={styles.sectionTitle}>Attributes</Text>
                    
                    <View style={styles.statsGrid}>
                      <CharacterStat
                        label="Strength"
                        value={selectedCompanion.stats.strength}
                      />
                      
                      <CharacterStat
                        label="Intelligence"
                        value={selectedCompanion.stats.intelligence}
                      />
                      
                      <CharacterStat
                        label="Dexterity"
                        value={selectedCompanion.stats.dexterity}
                      />
                      
                      <CharacterStat
                        label="Constitution"
                        value={selectedCompanion.stats.constitution}
                      />
                      
                      <CharacterStat
                        label="Charisma"
                        value={selectedCompanion.stats.charisma}
                      />
                    </View>
                  </View>
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
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
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    color: Colors.text,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  emptySubtext: {
    color: Colors.textDark,
    fontSize: 14,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 20,
    width: "80%",
    maxHeight: "80%",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
  modalScroll: {
    maxHeight: "80%",
  },
  companionRole: {
    color: Colors.secondary,
    fontSize: 16,
    marginBottom: 10,
  },
  companionDescription: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  relationshipContainer: {
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  statsContainer: {
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});