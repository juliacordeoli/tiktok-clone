import { View, StyleSheet, Text } from "react-native";

export function Inbox() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Em manutenção 👩‍🔧🧰🔧🛠🛑🪓
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
