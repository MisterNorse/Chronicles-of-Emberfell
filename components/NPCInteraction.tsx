import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";
import { NPC } from "@/types/game";
import Button from "./Button";

type NPCInteractionProps = {
  npc: NPC;
  dialogue: string;
  onContinue: () => void;
  onTrade?: () => void;
  onClose: () => void;
};

export default function NPCInteraction({ 
  npc, 
  dialogue, 
  onContinue, 
  onTrade, 
  onClose 
}: NPCInteractionProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Image source={{ uri: npc.image }} style={styles.npcImage} />
        <Text style={styles.npcName}>{npc.name}</Text>
      </View>
      
      <View style={styles.dialogueContainer}>
        <Text style={styles.dialogue}>{dialogue}</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Button
          title="Continue"
          onPress={onContinue}
          style={styles.actionButton}
        />
        
        {npc.type === "vendor" && onTrade && (
          <Button
            title="Trade"
            variant="secondary"
            onPress={onTrade}
            style={styles.actionButton}
          />
        )}
        
        <Button
          title="End Conversation"
          variant="outline"
          onPress={onClose}
          style={styles.actionButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderBottomWidth: 0,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  npcImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  npcName: {
    marginLeft: 15,
    color: Colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  dialogueContainer: {
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
  },
  dialogue: {
    color: Colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});