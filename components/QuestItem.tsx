import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "@/constants/colors";
import { Quest } from "@/types/game";

type QuestItemProps = {
  quest: Quest;
  onPress: (quest: Quest) => void;
};

export default function QuestItem({ quest, onPress }: QuestItemProps) {
  return (
    <Pressable 
      style={[
        styles.container, 
        quest.completed ? styles.completed : null
      ]} 
      onPress={() => onPress(quest)}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{quest.title}</Text>
        <View style={[
          styles.statusBadge,
          quest.completed ? styles.completedBadge : styles.activeBadge
        ]}>
          <Text style={styles.statusText}>
            {quest.completed ? "Completed" : "Active"}
          </Text>
        </View>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {quest.description}
      </Text>
      {!quest.completed && quest.objectives && (
        <View style={styles.objectives}>
          <Text style={styles.objectivesTitle}>Objectives:</Text>
          {quest.objectives.map((objective, index) => (
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  completed: {
    borderLeftColor: Colors.success,
    opacity: 0.8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
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
  description: {
    color: Colors.textDark,
    fontSize: 14,
    marginBottom: 12,
  },
  objectives: {
    marginTop: 8,
  },
  objectivesTitle: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  objective: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  objectiveStatus: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.backgroundLight,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 8,
  },
  objectiveCompleted: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  objectiveText: {
    color: Colors.textDark,
    fontSize: 14,
  },
  objectiveTextCompleted: {
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
});