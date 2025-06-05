import { Pressable, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";

type ChoiceButtonProps = {
  text: string;
  onPress: () => void;
};

export default function ChoiceButton({ text, onPress }: ChoiceButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <LinearGradient
        colors={[Colors.backgroundLight, Colors.background]}
        style={styles.gradient}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.secondary,
    width: "100%",
  },
  gradient: {
    padding: 16,
  },
  text: {
    color: Colors.text,
    fontSize: 16,
  },
});