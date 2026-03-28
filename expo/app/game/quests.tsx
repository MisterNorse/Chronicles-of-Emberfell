import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Modal, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { X } from "lucide-react-native";
import QuestItem from "@/components/QuestItem";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { Quest } from "@/types/game";

export default function Quests() {
  const { quests } = useGameStore();
  
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All");
  
  const filteredQuests = filter === "All" 
    ? quests 
    : filter === "Active" 
      ? quests.filter(quest => !quest.completed) 
      : quests.filter(quest => quest.completed);
  
  const handleQuestPress = (quest: Quest) => {
    setSelectedQuest(quest);
  };
  
  const handleClose = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>Quests</Text>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.text} size={24} />
        </Pressable>
      </View>
      
      <View style={styles.filterContainer}>
        <Pressable
          style={[styles.filterButton, filter === "All" && styles.activeFilterButton]}
          onPress={() => setFilter("All")}
        >
          <Text style={[styles.filterText, filter === "All" && styles.activeFilterText]}>
            All
          </Text>
        </Pressable>
        
        <Pressable
          style={[styles.filterButton, filter === "Active" && styles.activeFilterButton]}
          onPress={() => setFilter("Active")}
        >
          <Text style={[styles.filterText, filter === "Active" && styles.activeFilterText]}>
            Active
          </Text>
        </Pressable>
        
        <Pressable
          style={[styles.filterButton, filter === "Completed" && styles.activeFilterButton]}
          onPress={() => setFilter("Completed")}
        >
          <Text style={[styles.filterText, filter === "Completed" && styles.activeFilterText]}>
            Completed
          </Text>
        </Pressable>
      </View>
      
      {quests.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>You have no quests.</Text>
        </View>
      ) : filteredQuests.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No {filter.toLowerCase()} quests.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredQuests}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <QuestItem quest={item} onPress={handleQuestPress} />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
      
      {/* Quest Detail Modal */}
      <Modal
        visible={selectedQuest !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedQuest(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedQuest && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedQuest.title}</Text>
                  <Pressable onPress={() => setSelectedQuest(null)}>
                    <X color={Colors.text} size={20} />
                  </Pressable>
                </View>
                
                <ScrollView style={styles.modalScroll}>
                  <View style={[
                    styles.statusBadge,
                    selectedQuest.completed ? styles.completedBadge : styles.activeBadge
                  ]}>
                    <Text style={styles.statusText}>
                      {selectedQuest.completed ? "Completed" : "Active"}
                    </Text>
                  </View>
                  
                  <Text style={styles.questDescription}>
                    {selectedQuest.description}
                  </Text>
                  
                  {selectedQuest.objectives && (
                    <View style={styles.objectivesContainer}>
                      <Text style={styles.objectivesTitle}>Objectives:</Text>
                      {selectedQuest.objectives.map((objective, index) => (
                        <View key={index} style={styles.objective}>
                          <View style={[
                            styles.objectiveStatus,
                            objective.completed ? styles.objectiveCompleted : null
                          ]} />
                          <Text style={[
                            styles.objectiveText,
                            objective.completed ? styles.objectiveTextCompleted : null
                          ]}>
                            {objective.description}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {selectedQuest.reward && (
                    <View style={styles.rewardContainer}>
                      <Text style={styles.rewardTitle}>Rewards:</Text>
                      <View style={styles.rewardList}>
                        {selectedQuest.reward.gold && (
                          <Text style={styles.rewardItem}>
                            {selectedQuest.reward.gold} Gold
                          </Text>
                        )}
                        {selectedQuest.reward.experience && (
                          <Text style={styles.rewardItem}>
                            {selectedQuest.reward.experience} Experience
                          </Text>
                        )}
                        {selectedQuest.reward.items && selectedQuest.reward.items.map((item, index) => (
                          <Text key={index} style={styles.rewardItem}>
                            {item.name}
                          </Text>
                        ))}
                      </View>
                    </View>
                  )}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.backgroundLight,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.backgroundLight,
  },
  activeFilterButton: {
    backgroundColor: Colors.primary,
  },
  filterText: {
    color: Colors.textDark,
  },
  activeFilterText: {
    color: Colors.text,
    fontWeight: "bold",
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: Colors.textDark,
    fontSize: 16,
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
    maxHeight: "70%",
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
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 15,
  },
  activeBadge: {
    backgroundColor: Colors.primary,
  },
  completedBadge: {
    backgroundColor: Colors.success,
  },
  statusText: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: "bold",
  },
  questDescription: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  objectivesContainer: {
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  objectivesTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  objective: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  objectiveStatus: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.backgroundLight,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 10,
  },
  objectiveCompleted: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  objectiveText: {
    color: Colors.textDark,
    fontSize: 14,
    flex: 1,
  },
  objectiveTextCompleted: {
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
  rewardContainer: {
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.gold,
  },
  rewardTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rewardList: {
    marginLeft: 10,
  },
  rewardItem: {
    color: Colors.textDark,
    fontSize: 14,
    marginBottom: 5,
  },
});