import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/colors";

type StatBarProps = {
  label: string;
  value: number;
  maxValue: number;
  color?: string;
};

export default function StatBar({ 
  label, 
  value, 
  maxValue, 
  color = Colors.primary 
}: StatBarProps) {
  const percentage = (value / maxValue) * 100;
  
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}/{maxValue}</Text>
      </View>
      <View style={styles.barBackground}>
        <View 
          style={[
            styles.barFill, 
            { width: `${percentage}%`, backgroundColor: color }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    width: "100%",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "bold",
  },
  value: {
    color: Colors.textDark,
    fontSize: 14,
  },
  barBackground: {
    height: 10,
    backgroundColor: Colors.backgroundLight,
    borderRadius: 5,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 5,
  },
});