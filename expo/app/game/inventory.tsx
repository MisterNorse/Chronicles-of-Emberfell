import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { X } from "lucide-react-native";
import InventoryItem from "@/components/InventoryItem";
import Button from "@/components/Button";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { Item, ItemType } from "@/types/game";

export default function Inventory() {
  const { inventory, equipItem, unequipItem, useItem, removeItem } = useGameStore();
  
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [filter, setFilter] = useState<ItemType | "All">("All");
  
  const filteredItems = filter === "All" 
    ? inventory 
    : inventory.filter(item => item.type === filter);
  
  const handleItemPress = (item: Item) => {
    setSelectedItem(item);
  };
  
  const handleEquip = () => {
    if (selectedItem && selectedItem.equippable) {
      if (selectedItem.equipped) {
        unequipItem(selectedItem.id);
      } else {
        equipItem(selectedItem.id);
      }
    }
    setSelectedItem(null);
  };
  
  const handleUse = () => {
    if (selectedItem && selectedItem.consumable) {
      useItem(selectedItem.id);
    }
    setSelectedItem(null);
  };
  
  const handleDiscard = () => {
    if (selectedItem) {
      removeItem(selectedItem.id, 1);
    }
    setSelectedItem(null);
  };
  
  const handleClose = () => {
    router.back();
  };
  
  const renderFilterButton = (type: ItemType | "All") => (
    <Pressable
      style={[styles.filterButton, filter === type && styles.activeFilterButton]}
      onPress={() => setFilter(type)}
    >
      <Text style={[styles.filterText, filter === type && styles.activeFilterText]}>
        {type}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>Inventory</Text>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.text} size={24} />
        </Pressable>
      </View>
      
      <View style={styles.filterContainer}>
        {renderFilterButton("All")}
        {renderFilterButton("Weapon")}
        {renderFilterButton("Armor")}
        {renderFilterButton("Potion")}
        {renderFilterButton("Food")}
        {renderFilterButton("Quest")}
        {renderFilterButton("Misc")}
      </View>
      
      {inventory.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your inventory is empty.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InventoryItem item={item} onPress={handleItemPress} />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
      
      {/* Item Detail Modal */}
      <Modal
        visible={selectedItem !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedItem(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedItem.name}</Text>
                  <Pressable onPress={() => setSelectedItem(null)}>
                    <X color={Colors.text} size={20} />
                  </Pressable>
                </View>
                
                <Text style={styles.itemType}>{selectedItem.type}</Text>
                <Text style={styles.itemDescription}>{selectedItem.description}</Text>
                
                {selectedItem.stats && (
                  <View style={styles.statsContainer}>
                    {Object.entries(selectedItem.stats).map(([key, value]) => (
                      <Text key={key} style={styles.statText}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value > 0 ? `+${value}` : value}
                      </Text>
                    ))}
                  </View>
                )}
                
                <Text style={styles.itemValue}>Value: {selectedItem.value} gold</Text>
                
                <View style={styles.modalActions}>
                  {selectedItem.equippable && (
                    <Button
                      title={selectedItem.equipped ? "Unequip" : "Equip"}
                      onPress={handleEquip}
                      style={styles.actionButton}
                    />
                  )}
                  
                  {selectedItem.consumable && (
                    <Button
                      title="Use"
                      onPress={handleUse}
                      style={styles.actionButton}
                    />
                  )}
                  
                  <Button
                    title="Discard"
                    variant="outline"
                    onPress={handleDiscard}
                    style={styles.actionButton}
                    textStyle={{ color: Colors.danger }}
                  />
                </View>
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
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "center",
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.backgroundLight,
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.textDark,
  },
  activeFilterButton: {
    backgroundColor: Colors.primary,
    borderColor: Colors.secondary,
  },
  filterText: {
    color: Colors.textDark,
    fontSize: 12,
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
  itemType: {
    color: Colors.secondary,
    fontSize: 14,
    marginBottom: 10,
  },
  itemDescription: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 15,
  },
  statsContainer: {
    backgroundColor: Colors.backgroundLight,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  statText: {
    color: Colors.text,
    fontSize: 14,
    marginBottom: 5,
  },
  itemValue: {
    color: Colors.gold,
    fontSize: 14,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});