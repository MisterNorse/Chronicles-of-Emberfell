import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/colors";

type CharacterStatProps = {
  label: string;
  value: number;
  modifier?: number;
};

export default function CharacterStat({ 
  label, 
  value, 
  modifier 
}: CharacterStatProps) {
  const getModifierText = () => {
    if (modifier === undefined) return null;
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        {modifier !== undefined && (
          <Text style={[
            styles.modifier,
            modifier >= 0 ? styles.positive : styles.negative
          ]}>
            {getModifierText()}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 12,
  },
  label: {
    color: Colors.textDark,
    fontSize: 14,
    marginBottom: 4,
  },
  valueContainer: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  value: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 22,
  },
  modifier: {
    position: "absolute",
    bottom: -10,
    backgroundColor: Colors.background,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
    borderWidth: 1,
  },
  positive: {
    color: Colors.success,
    borderColor: Colors.success,
  },
  negative: {
    color: Colors.danger,
    borderColor: Colors.danger,
  },
});