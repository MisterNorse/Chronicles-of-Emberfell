import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Image } from "expo-image";
import Button from "@/components/Button";
import StatBar from "@/components/StatBar";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { useCombatStore } from "@/store/combatStore";

export default function Combat() {
  const { character } = useGameStore();
  const { 
    combatState, 
    inCombat, 
    playerAttack, 
    isPlayerTurn,
    endCombat
  } = useCombatStore();
  
  const [selectedAbility, setSelectedAbility] = useState(0);
  
  useEffect(() => {
    if (!inCombat) {
      router.replace("/game/main");
    }
  }, [inCombat]);
  
  if (!combatState) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Preparing for combat...</Text>
      </View>
    );
  }
  
  const handleAttack = (enemyId: string) => {
    if (isPlayerTurn()) {
      playerAttack(enemyId, selectedAbility);
    }
  };
  
  const handleFlee = () => {
    // 50% chance to flee successfully
    if (Math.random() > 0.5) {
      endCombat(false);
    } else {
      // Failed to flee, lose turn
      playerAttack(combatState.enemies[0].id, -1);
    }
  };
  
  const renderEnemy = (enemy: any) => {
    if (enemy.health <= 0) return null;
    
    return (
      <Pressable 
        style={styles.enemyContainer}
        onPress={() => handleAttack(enemy.id)}
        disabled={!isPlayerTurn()}
      >
        <Image source={{ uri: enemy.image }} style={styles.enemyImage} />
        <Text style={styles.enemyName}>{enemy.name}</Text>
        <StatBar
          label="Health"
          value={enemy.health}
          maxValue={enemy.maxHealth}
          color="#e74c3c"
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>Combat</Text>
        <Text style={styles.roundInfo}>Round {combatState.round}</Text>
      </View>
      
      <View style={styles.battlefieldContainer}>
        <View style={styles.enemiesContainer}>
          {combatState.enemies.map(enemy => renderEnemy(enemy))}
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.playerContainer}>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{character.name}</Text>
            <StatBar
              label="Health"
              value={character.health}
              maxValue={character.maxHealth}
              color="#e74c3c"
            />
            <StatBar
              label="Mana"
              value={character.mana}
              maxValue={character.maxMana}
              color="#3498db"
            />
          </View>
        </View>
      </View>
      
      <View style={styles.combatLog}>
        <Text style={styles.combatLogTitle}>Combat Log</Text>
        <FlatList
          data={combatState.log.slice(-5).reverse()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.logEntry}>{item}</Text>
          )}
          style={styles.logList}
        />
      </View>
      
      <View style={styles.actionsContainer}>
        <Text style={styles.turnIndicator}>
          {isPlayerTurn() ? "Your Turn" : "Enemy Turn"}
        </Text>
        
        <View style={styles.abilities}>
          <Pressable
            style={[styles.abilityButton, selectedAbility === 0 && styles.selectedAbility]}
            onPress={() => setSelectedAbility(0)}
            disabled={!isPlayerTurn()}
          >
            <Text style={styles.abilityName}>Attack</Text>
          </Pressable>
          
          <Pressable
            style={[styles.abilityButton, selectedAbility === 1 && styles.selectedAbility]}
            onPress={() => setSelectedAbility(1)}
            disabled={!isPlayerTurn() || character.mana < 10}
          >
            <Text style={styles.abilityName}>Power Strike</Text>
            <Text style={styles.abilityCost}>10 Mana</Text>
          </Pressable>
        </View>
        
        <Button
          title="Flee"
          variant="outline"
          onPress={handleFlee}
          disabled={!isPlayerTurn()}
          style={styles.fleeButton}
        />
      </View>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  loadingText: {
    color: Colors.text,
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
  },
  roundInfo: {
    color: Colors.secondary,
    fontSize: 16,
  },
  battlefieldContainer: {
    flex: 1,
    padding: 20,
  },
  enemiesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  enemyContainer: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.backgroundLight,
    width: "80%",
  },
  enemyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.background,
    marginBottom: 10,
  },
  enemyName: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    height: 2,
    backgroundColor: Colors.primary,
    marginVertical: 20,
  },
  playerContainer: {
    alignItems: "center",
  },
  playerInfo: {
    width: "80%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.backgroundLight,
  },
  playerName: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  combatLog: {
    backgroundColor: Colors.backgroundLight,
    padding: 10,
    margin: 20,
    borderRadius: 8,
    maxHeight: 150,
  },
  combatLogTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  logList: {
    maxHeight: 120,
  },
  logEntry: {
    color: Colors.textDark,
    fontSize: 14,
    marginBottom: 5,
  },
  actionsContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
  },
  turnIndicator: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  abilities: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  abilityButton: {
    backgroundColor: Colors.backgroundLight,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "45%",
    borderWidth: 1,
    borderColor: Colors.textDark,
  },
  selectedAbility: {
    backgroundColor: Colors.primary,
    borderColor: Colors.secondary,
  },
  abilityName: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  abilityCost: {
    color: Colors.textDark,
    fontSize: 12,
  },
  fleeButton: {
    marginTop: 10,
  },
});