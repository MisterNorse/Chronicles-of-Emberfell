import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";
import { ReactNode } from "react";

type MenuButtonProps = {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  icon?: ReactNode;
};

export default function MenuButton({ onPress, title, style, icon }: MenuButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <LinearGradient
        colors={[Colors.backgroundLight, Colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
    width: "80%",
    height: 60,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 1,
  },
  icon: {
    marginRight: 10,
  },
});