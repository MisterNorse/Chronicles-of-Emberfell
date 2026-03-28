import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Image } from "expo-image";
import { X } from "lucide-react-native";
import Button from "@/components/Button";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { shopItems } from "@/data/shopItems";
import { Item } from "@/types/game";
import { mapLocations } from "@/data/mapLocations";

export default function Shop() {
  const { character, addItem, updateCharacter, currentLocation } = useGameStore();
  
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [filter, setFilter] = useState<"All" | "Weapon" | "Armor" | "Potion" | "Food" | "Misc">("All");
  const [vendor, setVendor] = useState<any>(null);
  
  // Find the current vendor based on location
  useEffect(() => {
    const location = mapLocations.find(loc => loc.id === currentLocation);
    if (location && location.npcs) {
      const foundVendor = location.npcs.find(npc => npc.type === "vendor");
      if (foundVendor) {
        setVendor(foundVendor);
      }
    }
  }, [currentLocation]);
  
  const filteredItems = filter === "All" 
    ? shopItems 
    : shopItems.filter(item => item.type === filter);
  
  const handleItemPress = (item: Item) => {
    setSelectedItem(item);
  };
  
  const handleBuy = () => {
    if (selectedItem) {
      if (character.gold >= selectedItem.value) {
        // Deduct gold
        updateCharacter({ gold: character.gold - selectedItem.value });
        
        // Add item to inventory
        addItem(selectedItem);
        
        setSelectedItem(null);
      } else {
        alert("You don't have enough gold to buy this item.");
      }
    }
  };
  
  const handleClose = () => {
    router.back();
  };
  
  // Get random vendor dialogue
  const getVendorDialogue = () => {
    if (!vendor) return "Welcome to my shop!";
    const randomIndex = Math.floor(Math.random() * vendor.dialogue.length);
    return vendor.dialogue[randomIndex];
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>{vendor ? `${vendor.name}'s Shop` : "Shop"}</Text>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.text} size={24} />
        </Pressable>
      </View>
      
      {vendor && (
        <View style={styles.vendorContainer}>
          <Image source={{ uri: vendor.image }} style={styles.vendorImage} />
          <View style={styles.vendorInfo}>
            <Text style={styles.vendorDialogue}>"{getVendorDialogue()}"</Text>
          </View>
        </View>
      )}
      
      <View style={styles.goldContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGNvaW58ZW58MHx8MHx8fDA%3D" }}
          style={styles.goldIcon}
        />
        <Text style={styles.goldText}>{character.gold} Gold</Text>
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
          style={[styles.filterButton, filter === "Weapon" && styles.activeFilterButton]}
          onPress={() => setFilter("Weapon")}
        >
          <Text style={[styles.filterText, filter === "Weapon" && styles.activeFilterText]}>
            Weapons
          </Text>
        </Pressable>
        
        <Pressable
          style={[styles.filterButton, filter === "Armor" && styles.activeFilterButton]}
          onPress={() => setFilter("Armor")}
        >
          <Text style={[styles.filterText, filter === "Armor" && styles.activeFilterText]}>
            Armor
          </Text>
        </Pressable>
        
        <Pressable
          style={[styles.filterButton, filter === "Potion" && styles.activeFilterButton]}
          onPress={() => setFilter("Potion")}
        >
          <Text style={[styles.filterText, filter === "Potion" && styles.activeFilterText]}>
            Potions
          </Text>
        </Pressable>
        
        <Pressable
          style={[styles.filterButton, filter === "Misc" && styles.activeFilterButton]}
          onPress={() => setFilter("Misc")}
        >
          <Text style={[styles.filterText, filter === "Misc" && styles.activeFilterText]}>
            Misc
          </Text>
        </Pressable>
      </View>
      
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.itemContainer} onPress={() => handleItemPress(item)}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.itemPrice}>{item.value} Gold</Text>
            </View>
          </Pressable>
        )}
        contentContainerStyle={styles.listContent}
      />
      
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
                <Text style={styles.itemDetailDescription}>{selectedItem.description}</Text>
                
                {selectedItem.stats && (
                  <View style={styles.statsContainer}>
                    {Object.entries(selectedItem.stats).map(([key, value]) => (
                      <Text key={key} style={styles.statText}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value > 0 ? `+${value}` : value}
                      </Text>
                    ))}
                  </View>
                )}
                
                <Text style={styles.itemDetailPrice}>Price: {selectedItem.value} Gold</Text>
                
                <View style={styles.modalActions}>
                  <Button
                    title="Buy"
                    onPress={handleBuy}
                    disabled={character.gold < selectedItem.value}
                    style={character.gold < selectedItem.value ? styles.disabledButton : undefined}
                  />
                  
                  {character.gold < selectedItem.value && (
                    <Text style={styles.notEnoughGold}>Not enough gold!</Text>
                  )}
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
  vendorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: Colors.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  vendorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  vendorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  vendorDialogue: {
    color: Colors.text,
    fontSize: 16,
    fontStyle: "italic",
    lineHeight: 22,
  },
  goldContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  goldIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  goldText: {
    color: Colors.gold,
    fontSize: 18,
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.backgroundLight,
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
  itemContainer: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: Colors.background,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  itemDescription: {
    color: Colors.textDark,
    fontSize: 14,
    marginTop: 4,
  },
  itemPrice: {
    color: Colors.gold,
    fontSize: 14,
    marginTop: 4,
    fontWeight: "bold",
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
  itemDetailDescription: {
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
  itemDetailPrice: {
    color: Colors.gold,
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
  modalActions: {
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  notEnoughGold: {
    color: Colors.danger,
    fontSize: 14,
    marginTop: 10,
  },
});