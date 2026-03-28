import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";

type DialogBoxProps = {
  text: string;
  speaker?: string;
  speakerPortrait?: string;
  onPress: () => void;
};

export default function DialogBox({ text, speaker, speakerPortrait, onPress }: DialogBoxProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={[Colors.backgroundLight, Colors.background]}
        style={styles.gradient}
      >
        {speaker && (
          <View style={styles.speakerContainer}>
            {speakerPortrait && (
              <View style={styles.portraitContainer}>
                <Image
                  source={{ uri: speakerPortrait }}
                  style={styles.portrait}
                  contentFit="cover"
                />
                <View style={styles.portraitBorder} />
              </View>
            )}
            <View style={styles.speakerInfo}>
              <View style={styles.speakerNameContainer}>
                <Text style={styles.speaker}>{speaker}</Text>
              </View>
            </View>
          </View>
        )}
        <Text style={[styles.text, speaker && styles.textWithSpeaker]}>{text}</Text>
        <Text style={styles.continueText}>Tap to continue</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.secondary,
    minHeight: 120,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  gradient: {
    padding: 16,
    minHeight: 120,
  },
  speakerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  portraitContainer: {
    position: "relative",
    marginRight: 12,
  },
  portrait: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  portraitBorder: {
    position: "absolute",
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  speakerInfo: {
    flex: 1,
  },
  speakerNameContainer: {
    backgroundColor: Colors.primary,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  speaker: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    color: Colors.text,
    fontSize: 18,
    lineHeight: 24,
  },
  textWithSpeaker: {
    marginTop: 8,
  },
  continueText: {
    color: Colors.textDark,
    fontSize: 12,
    alignSelf: "flex-end",
    marginTop: 8,
  },
});