import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Animated, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "@/constants/colors";

const { width, height } = Dimensions.get("window");

// Fire Particle component for mystical fire effects
const FireParticle = ({ delay = 0 }: { delay?: number }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const flicker = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      // Initial spawn animation
      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            tension: 80,
            friction: 4,
            useNativeDriver: true,
          }),
        ]),
      ]).start();

      // Continuous fire movement
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 2000 + Math.random() * 1500,
          useNativeDriver: true,
        })
      ).start();

      // Fire flicker effect
      Animated.loop(
        Animated.sequence([
          Animated.timing(flicker, {
            toValue: 1,
            duration: 150 + Math.random() * 100,
            useNativeDriver: true,
          }),
          Animated.timing(flicker, {
            toValue: 0,
            duration: 150 + Math.random() * 100,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [delay]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -height * 0.8],
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 0.3, 0.7, 1],
    outputRange: [0, Math.random() * 30 - 15, Math.random() * 20 - 10, Math.random() * 40 - 20],
  });

  const particleOpacity = Animated.multiply(
    opacity,
    animatedValue.interpolate({
      inputRange: [0, 0.1, 0.8, 1],
      outputRange: [1, 1, 0.7, 0],
    })
  );

  const flickerScale = flicker.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1.2],
  });

  const particleScale = Animated.multiply(scale, flickerScale);

  // Random fire colors
  const fireColors = [
    "#FF4500", "#FF6347", "#FFD700", "#FF8C00", "#DC143C", "#B22222"
  ];
  const particleColor = fireColors[Math.floor(Math.random() * fireColors.length)];

  return (
    <Animated.View
      style={[
        styles.fireParticle,
        {
          backgroundColor: particleColor,
          opacity: particleOpacity,
          transform: [
            { translateY },
            { translateX },
            { scale: particleScale },
          ],
          left: width * 0.3 + Math.random() * (width * 0.4),
          top: height * 0.7 + Math.random() * 100,
        },
      ]}
    />
  );
};

// Dragon silhouette component
const DragonSilhouette = ({ opacity, scale }: { opacity: Animated.Value, scale: Animated.Value }) => {
  return (
    <Animated.View
      style={[
        styles.dragonContainer,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    >
      {/* Dragon body - simplified geometric representation */}
      <View style={styles.dragonBody}>
        {/* Head */}
        <View style={styles.dragonHead} />
        {/* Neck */}
        <View style={styles.dragonNeck} />
        {/* Wings */}
        <View style={[styles.dragonWing, styles.dragonWingLeft]} />
        <View style={[styles.dragonWing, styles.dragonWingRight]} />
        {/* Body */}
        <View style={styles.dragonTorso} />
        {/* Tail */}
        <View style={styles.dragonTail} />
      </View>
    </Animated.View>
  );
};

export default function IntroScreen() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const titleScale = useRef(new Animated.Value(0.3)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const fireIntensity = useRef(new Animated.Value(0)).current;
  const dragonOpacity = useRef(new Animated.Value(0)).current;
  const dragonScale = useRef(new Animated.Value(0.1)).current;
  const backgroundShift = useRef(new Animated.Value(0)).current;
  const fireGlow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    checkIntroStatus();
  }, []);

  const checkIntroStatus = async () => {
    try {
      const introSeen = await AsyncStorage.getItem("intro-seen");
      if (introSeen === "true") {
        setHasSeenIntro(true);
        setShowMainMenu(true);
      } else {
        startEpicIntroAnimation();
      }
    } catch (error) {
      console.error("Error checking intro status:", error);
      startEpicIntroAnimation();
    }
  };

  const startEpicIntroAnimation = () => {
    // Background fire animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundShift, {
          toValue: 1,
          duration: 6000,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundShift, {
          toValue: 0,
          duration: 6000,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Fire glow pulsing
    Animated.loop(
      Animated.sequence([
        Animated.timing(fireGlow, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fireGlow, {
          toValue: 0.3,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Main epic intro sequence
    Animated.sequence([
      // Fade in background with fire
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(fireIntensity, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
      
      // Hold fire for dramatic effect
      Animated.delay(2000),
      
      // Dragon emerges from the fire
      Animated.parallel([
        Animated.spring(dragonScale, {
          toValue: 1,
          tension: 30,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(dragonOpacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
      
      // Hold dragon reveal
      Animated.delay(1500),
      
      // Title emerges with epic scaling
      Animated.parallel([
        Animated.spring(titleScale, {
          toValue: 1,
          tension: 40,
          friction: 6,
          useNativeDriver: true,
        }),
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
      
      // Subtitle appears
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      
      // Hold for epic finale
      Animated.delay(4000),
    ]).start(() => {
      // Mark intro as seen and transition to main menu
      AsyncStorage.setItem("intro-seen", "true");
      setHasSeenIntro(true);
      
      // Epic fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setShowMainMenu(true);
      });
    });
  };

  const skipIntro = () => {
    AsyncStorage.setItem("intro-seen", "true");
    setHasSeenIntro(true);
    setShowMainMenu(true);
  };

  if (showMainMenu) {
    return <MainMenuContent />;
  }

  const backgroundColors = backgroundShift.interpolate({
    inputRange: [0, 1],
    outputRange: ["#1a1a24", "#2d1810"],
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Animated Fire Background */}
      <Animated.View style={[styles.background, { backgroundColor: backgroundColors }]}>
        <LinearGradient
          colors={[
            "rgba(139, 0, 0, 0.9)",
            "rgba(26, 26, 36, 0.8)",
            "rgba(255, 69, 0, 0.4)",
            "rgba(255, 140, 0, 0.3)",
            "rgba(26, 26, 36, 1)",
          ]}
          style={styles.gradientOverlay}
        />
      </Animated.View>

      {/* Mystical Fire Particles */}
      {Array.from({ length: 40 }).map((_, index) => (
        <FireParticle key={index} delay={index * 100} />
      ))}

      {/* Central Fire Glow */}
      <Animated.View
        style={[
          styles.centralFire,
          {
            opacity: Animated.multiply(fireIntensity, fireGlow),
            transform: [
              {
                scale: fireGlow.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1.3],
                }),
              },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={["rgba(255, 215, 0, 0.9)", "rgba(255, 69, 0, 0.8)", "rgba(139, 0, 0, 0.6)"]}
          style={styles.fireCore}
        />
      </Animated.View>

      {/* Dragon Silhouette */}
      <DragonSilhouette opacity={dragonOpacity} scale={dragonScale} />

      {/* Main Content */}
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {/* Epic Title */}
        <Animated.View
          style={[
            styles.titleContainer,
            {
              opacity: titleOpacity,
              transform: [{ scale: titleScale }],
            },
          ]}
        >
          <Text style={styles.title}>Chronicles of Destiny</Text>
          <View style={styles.titleUnderline} />
        </Animated.View>

        {/* Epic Subtitle */}
        <Animated.Text
          style={[
            styles.subtitle,
            {
              opacity: subtitleOpacity,
            },
          ]}
        >
          Rise of the Phoenix Champion
        </Animated.Text>

        {/* Epic tagline */}
        <Animated.Text
          style={[
            styles.tagline,
            {
              opacity: subtitleOpacity,
            },
          ]}
        >
          From the ashes of the past • A legend awakens • Destiny calls
        </Animated.Text>
      </Animated.View>

      {/* Skip button */}
      <Animated.View style={[styles.skipContainer, { opacity: fadeAnim }]}>
        <Text style={styles.skipText} onPress={skipIntro}>
          Tap to skip
        </Text>
      </Animated.View>
    </View>
  );
}

// Main Menu Component (moved from original index.tsx)
function MainMenuContent() {
  const { useGameStore } = require("@/store/gameStore");
  const resetGame = useGameStore((state: any) => state.resetGame);
  
  const handleNewGame = () => {
    resetGame();
    router.push("/game/character-creation");
  };
  
  const handleContinueGame = () => {
    router.push("/game/main");
  };
  
  const handleSettings = () => {
    router.push("/settings");
  };

  const MenuButton = require("@/components/MenuButton").default;

  return (
    <View style={mainMenuStyles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight, Colors.background]}
        style={mainMenuStyles.background}
      />
      
      <View style={mainMenuStyles.titleContainer}>
        <Text style={mainMenuStyles.title}>Chronicles of Destiny</Text>
        <Text style={mainMenuStyles.subtitle}>A Fantasy Adventure</Text>
      </View>
      
      <View style={mainMenuStyles.menuContainer}>
        <MenuButton
          title="New Game"
          onPress={handleNewGame}
          style={mainMenuStyles.menuButton}
        />
        
        <MenuButton
          title="Continue Game"
          onPress={handleContinueGame}
          style={mainMenuStyles.menuButton}
        />
        
        <MenuButton
          title="Settings"
          onPress={handleSettings}
          style={mainMenuStyles.menuButton}
        />
      </View>
      
      <Text style={mainMenuStyles.footer}>© 2025 Fantasy Chronicles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a24",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  gradientOverlay: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  centralFire: {
    position: "absolute",
    width: 400,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    top: height * 0.3,
    left: width * 0.5 - 200,
    zIndex: 5,
  },
  fireCore: {
    width: 300,
    height: 300,
    borderRadius: 150,
    opacity: 0.8,
  },
  dragonContainer: {
    position: "absolute",
    width: 200,
    height: 200,
    top: height * 0.35,
    left: width * 0.5 - 100,
    zIndex: 8,
  },
  dragonBody: {
    flex: 1,
    position: "relative",
  },
  dragonHead: {
    position: "absolute",
    width: 40,
    height: 30,
    backgroundColor: "#2c1810",
    borderRadius: 15,
    top: 20,
    left: 80,
    shadowColor: "#ff4500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  dragonNeck: {
    position: "absolute",
    width: 20,
    height: 40,
    backgroundColor: "#2c1810",
    borderRadius: 10,
    top: 45,
    left: 90,
    shadowColor: "#ff4500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  dragonWing: {
    position: "absolute",
    width: 60,
    height: 80,
    backgroundColor: "#2c1810",
    borderRadius: 30,
    shadowColor: "#ff6347",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
  },
  dragonWingLeft: {
    top: 60,
    left: 20,
    transform: [{ rotate: "-20deg" }],
  },
  dragonWingRight: {
    top: 60,
    right: 20,
    transform: [{ rotate: "20deg" }],
  },
  dragonTorso: {
    position: "absolute",
    width: 50,
    height: 60,
    backgroundColor: "#2c1810",
    borderRadius: 25,
    top: 80,
    left: 75,
    shadowColor: "#ff4500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  dragonTail: {
    position: "absolute",
    width: 15,
    height: 50,
    backgroundColor: "#2c1810",
    borderRadius: 8,
    top: 130,
    left: 92,
    transform: [{ rotate: "15deg" }],
    shadowColor: "#ff4500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#ffd700",
    textAlign: "center",
    textShadowColor: "#ff4500",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
    letterSpacing: 3,
  },
  titleUnderline: {
    width: 250,
    height: 4,
    backgroundColor: "#ff6347",
    marginTop: 12,
    borderRadius: 2,
    shadowColor: "#ff4500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  subtitle: {
    fontSize: 22,
    color: "#ff8c00",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 1.5,
    marginBottom: 30,
    textShadowColor: "#8b0000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 16,
    color: "#ffa500",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0.8,
    lineHeight: 22,
    textShadowColor: "#8b0000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  fireParticle: {
    position: "absolute",
    width: 6,
    height: 12,
    borderRadius: 3,
    shadowColor: "#ff4500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  skipContainer: {
    position: "absolute",
    bottom: 50,
    right: 30,
    zIndex: 20,
  },
  skipText: {
    color: "#ffa500",
    fontSize: 16,
    opacity: 0.8,
    textShadowColor: "#8b0000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

const mainMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: Colors.primary,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.secondary,
    textAlign: "center",
  },
  menuContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  menuButton: {
    marginVertical: 10,
  },
  footer: {
    color: Colors.textDark,
    marginBottom: 20,
    fontSize: 12,
  },
});