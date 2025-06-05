import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Plus, Minus } from "lucide-react-native";
import Colors from "@/constants/colors";

interface CustomSliderProps {
  value: number;
  minimumValue: number;
  maximumValue: number;
  onValueChange: (value: number) => void;
  step?: number;
  style?: any;
  label?: string;
}

export default function CustomSlider({
  value,
  minimumValue,
  maximumValue,
  onValueChange,
  step = 1,
  style,
  label
}: CustomSliderProps) {
  const handleDecrement = () => {
    const newValue = Math.max(minimumValue, value - step);
    onValueChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(maximumValue, value + step);
    onValueChange(newValue);
  };

  const progress = ((value - minimumValue) / (maximumValue - minimumValue)) * 100;

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.sliderContainer}>
        <Pressable
          style={[styles.button, value <= minimumValue && styles.disabledButton]}
          onPress={handleDecrement}
          disabled={value <= minimumValue}
        >
          <Minus color={value <= minimumValue ? Colors.textDark : Colors.text} size={16} />
        </Pressable>
        
        <View style={styles.trackContainer}>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.value}>{value}</Text>
        </View>
        
        <Pressable
          style={[styles.button, value >= maximumValue && styles.disabledButton]}
          onPress={handleIncrement}
          disabled={value >= maximumValue}
        >
          <Plus color={value >= maximumValue ? Colors.textDark : Colors.text} size={16} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: Colors.backgroundLight,
    borderWidth: 1,
    borderColor: Colors.textDark,
  },
  trackContainer: {
    flex: 1,
    marginHorizontal: 12,
    alignItems: "center",
  },
  track: {
    width: "100%",
    height: 8,
    backgroundColor: Colors.backgroundLight,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 4,
  },
  fill: {
    height: "100%",
    backgroundColor: Colors.secondary,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    minWidth: 30,
    textAlign: "center",
  },
});