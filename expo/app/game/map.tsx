import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Image } from "expo-image";
import { X } from "lucide-react-native";
import Button from "@/components/Button";
import MapLocation from "@/components/MapLocation";
import Colors from "@/constants/colors";
import { useGameStore } from "@/store/gameStore";
import { mapLocations } from "@/data/mapLocations";
import { MapLocation as MapLocationType, NPC } from "@/types/game";

export default function Map() {
  const { discoveredLocations, currentLocation, travelToLocation } = useGameStore();
  
  const [selectedLocation, setSelectedLocation] = useState<MapLocationType | null>(null);
  const [selectedNPC, setSelectedNPC] = useState<NPC | null>(null);
  
  const handleLocationPress = (location: MapLocationType) => {
    setSelectedLocation(location);
  };
  
  const handleNPCPress = (npc: NPC) => {
    setSelectedNPC(npc);
    setSelectedLocation(null);
  };
  
  const handleTravel = () => {
    if (selectedLocation) {
      // Check if the location is connected to the current location
      const currentLoc = mapLocations.find(loc => loc.id === currentLocation);
      
      if (currentLoc && currentLoc.connections.includes(selectedLocation.id)) {
        travelToLocation(selectedLocation.id);
        setSelectedLocation(null);
      } else {
        alert("You cannot travel directly to this location. You must follow the paths.");
      }
    }
  };
  
  const handleTalkToVendor = () => {
    if (selectedNPC && selectedNPC.type === "vendor") {
      router.push("/game/shop");
      setSelectedNPC(null);
    }
  };
  
  const handleClose = () => {
    router.back();
  };
  
  // Get random dialogue for NPC
  const getRandomDialogue = (npc: NPC) => {
    const randomIndex = Math.floor(Math.random() * npc.dialogue.length);
    return npc.dialogue[randomIndex];
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>World Map</Text>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.text} size={24} />
        </Pressable>
      </View>
      
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1524842495237-6abc73f2a5d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwfGVufDB8fDB8fHww" }}
          style={styles.mapBackground}
        />
        
        {/* Map Connections */}
        <View style={styles.connectionsContainer}>
          {mapLocations.map(location => {
            if (!discoveredLocations.includes(location.id)) return null;
            
            return location.connections.map(connId => {
              if (!discoveredLocations.includes(connId)) return null;
              
              const connectedLoc = mapLocations.find(l => l.id === connId);
              if (!connectedLoc) return null;
              
              // Calculate line coordinates
              const startX = location.position.x + 20;
              const startY = location.position.y + 20;
              const endX = connectedLoc.position.x + 20;
              const endY = connectedLoc.position.y + 20;
              
              // Calculate line length and angle
              const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
              const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
              
              return (
                <View
                  key={`${location.id}-${connId}`}
                  style={[
                    styles.connectionLine,
                    {
                      width: length,
                      left: startX,
                      top: startY,
                      transform: [{ rotate: `${angle}deg` }],
                      transformOrigin: "left"
                    }
                  ]}
                />
              );
            });
          })}
        </View>
        
        {/* Map Locations */}
        {mapLocations.map(location => (
          <MapLocation
            key={location.id}
            location={location}
            onPress={handleLocationPress}
            discovered={discoveredLocations.includes(location.id)}
            current={currentLocation === location.id}
          />
        ))}
      </View>
      
      {/* Location Detail Modal */}
      <Modal
        visible={selectedLocation !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedLocation(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedLocation && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedLocation.name}</Text>
                  <Pressable onPress={() => setSelectedLocation(null)}>
                    <X color={Colors.text} size={20} />
                  </Pressable>
                </View>
                
                <ScrollView style={styles.modalScroll}>
                  <Text style={styles.locationDescription}>
                    {selectedLocation.description}
                  </Text>
                  
                  {currentLocation === selectedLocation.id ? (
                    <View style={styles.currentLocationBadge}>
                      <Text style={styles.currentLocationText}>Current Location</Text>
                    </View>
                  ) : (
                    <Button
                      title="Travel Here"
                      onPress={handleTravel}
                      disabled={!mapLocations.find(loc => loc.id === currentLocation)?.connections.includes(selectedLocation.id)}
                      style={!mapLocations.find(loc => loc.id === currentLocation)?.connections.includes(selectedLocation.id) ? styles.disabledButton : undefined}
                    />
                  )}
                  
                  {!mapLocations.find(loc => loc.id === currentLocation)?.connections.includes(selectedLocation.id) && currentLocation !== selectedLocation.id && (
                    <Text style={styles.travelWarning}>
                      You cannot travel directly to this location. You must follow the paths.
                    </Text>
                  )}
                  
                  {/* NPCs in this location */}
                  {selectedLocation.npcs && selectedLocation.npcs.length > 0 && (
                    <View style={styles.npcsContainer}>
                      <Text style={styles.npcsTitle}>People of Interest:</Text>
                      {selectedLocation.npcs.map(npc => (
                        <Pressable 
                          key={npc.id} 
                          style={styles.npcItem}
                          onPress={() => handleNPCPress(npc)}
                        >
                          <Image source={{ uri: npc.image }} style={styles.npcImage} />
                          <View style={styles.npcInfo}>
                            <Text style={styles.npcName}>{npc.name}</Text>
                            <Text style={styles.npcType}>
                              {npc.type === "vendor" ? "Merchant" : 
                               npc.type === "quest" ? "Quest Giver" : 
                               npc.type === "companion" ? "Potential Ally" : "Villager"}
                            </Text>
                          </View>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
      
      {/* NPC Detail Modal */}
      <Modal
        visible={selectedNPC !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedNPC(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedNPC && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedNPC.name}</Text>
                  <Pressable onPress={() => setSelectedNPC(null)}>
                    <X color={Colors.text} size={20} />
                  </Pressable>
                </View>
                
                <ScrollView style={styles.modalScroll}>
                  <View style={styles.npcDetailHeader}>
                    <Image source={{ uri: selectedNPC.image }} style={styles.npcDetailImage} />
                    <View style={styles.npcDetailInfo}>
                      <Text style={styles.npcDetailType}>
                        {selectedNPC.type === "vendor" ? "Merchant" : 
                         selectedNPC.type === "quest" ? "Quest Giver" : 
                         selectedNPC.type === "companion" ? "Potential Ally" : "Villager"}
                      </Text>
                    </View>
                  </View>
                  
                  <Text style={styles.npcDescription}>
                    {selectedNPC.description}
                  </Text>
                  
                  <View style={styles.dialogueContainer}>
                    <Text style={styles.dialogueText}>
                      "{getRandomDialogue(selectedNPC)}"
                    </Text>
                  </View>
                  
                  {selectedNPC.type === "vendor" && (
                    <Button
                      title="Trade"
                      onPress={handleTalkToVendor}
                      style={styles.tradeButton}
                    />
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
  mapContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  connectionsContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  connectionLine: {
    height: 3,
    backgroundColor: Colors.secondary,
    position: "absolute",
    opacity: 0.7,
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
  locationDescription: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  currentLocationBadge: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  currentLocationText: {
    color: Colors.text,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
  travelWarning: {
    color: Colors.danger,
    fontSize: 14,
    marginTop: 10,
    fontStyle: "italic",
    textAlign: "center",
  },
  npcsContainer: {
    marginTop: 20,
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
  },
  npcsTitle: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  npcItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  npcImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
  },
  npcInfo: {
    marginLeft: 10,
  },
  npcName: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  npcType: {
    color: Colors.textDark,
    fontSize: 14,
  },
  npcDetailHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  npcDetailImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  npcDetailInfo: {
    marginLeft: 15,
    flex: 1,
  },
  npcDetailType: {
    color: Colors.secondary,
    fontSize: 16,
    marginBottom: 5,
  },
  npcDescription: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
  dialogueContainer: {
    backgroundColor: Colors.backgroundLight,
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    marginBottom: 15,
  },
  dialogueText: {
    color: Colors.text,
    fontSize: 16,
    fontStyle: "italic",
    lineHeight: 22,
  },
  tradeButton: {
    marginTop: 10,
  },
});