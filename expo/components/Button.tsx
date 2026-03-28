import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, ColorValue, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";
import { ReactNode } from "react";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ReactNode;
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
  textStyle,
  icon,
}: ButtonProps) {
  const getGradientColors = (): [ColorValue, ColorValue, ...ColorValue[]] => {
    if (disabled) return [Colors.backgroundLight, Colors.backgroundLight];
    
    switch (variant) {
      case "primary":
        return [Colors.primary, Colors.secondary];
      case "secondary":
        return [Colors.secondary, Colors.primary];
      case "danger":
        return ["#e74c3c", "#c0392b"];
      case "outline":
        return [Colors.backgroundLight, Colors.backgroundLight];
      default:
        return [Colors.primary, Colors.secondary];
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case "small":
        return { paddingVertical: 8, paddingHorizontal: 16 };
      case "medium":
        return { paddingVertical: 12, paddingHorizontal: 24 };
      case "large":
        return { paddingVertical: 16, paddingHorizontal: 32 };
      default:
        return { paddingVertical: 12, paddingHorizontal: 24 };
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "small":
        return 14;
      case "medium":
        return 16;
      case "large":
        return 18;
      default:
        return 16;
    }
  };

  const isOutline = variant === "outline";

  return (
    <Pressable
      style={[
        styles.container, 
        isOutline && styles.outlineContainer,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={getGradientColors()}
        style={[
          styles.gradient, 
          getButtonSize(),
          isOutline && styles.outlineGradient
        ]}
      >
        <View style={styles.content}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text
            style={[
              styles.text,
              { fontSize: getTextSize() },
              disabled && styles.disabledText,
              isOutline && styles.outlineText,
              textStyle,
            ]}
          >
            {title}
          </Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  outlineContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  outlineGradient: {
    backgroundColor: "transparent",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    color: Colors.text,
    fontWeight: "bold",
    textAlign: "center",
  },
  outlineText: {
    color: Colors.primary,
  },
  disabledText: {
    color: Colors.textDark,
  },
});