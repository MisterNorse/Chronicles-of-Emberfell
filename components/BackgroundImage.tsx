import { StyleSheet, ImageBackground, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";
import { ReactNode } from "react";

type BackgroundImageProps = {
  source: string;
  children: ReactNode;
  style?: ViewStyle;
  overlay?: boolean;
};

export default function BackgroundImage({ 
  source, 
  children, 
  style,
  overlay = true 
}: BackgroundImageProps) {
  return (
    <ImageBackground
      source={{ uri: source }}
      style={[styles.background, style]}
      resizeMode="cover"
    >
      {overlay && (
        <LinearGradient
          colors={["rgba(26, 26, 36, 0.7)", "rgba(26, 26, 36, 0.5)"]}
          style={styles.overlay}
        />
      )}
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});