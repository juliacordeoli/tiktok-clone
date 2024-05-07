import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useState } from "react";
const senhaReal = "luna@gmail";
const emailReal = "luna";
export function Profile({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <Text style={{ color: "white", fontSize: 18 }}>📩🩰🧶Email🎀⚾🎡:</Text>
        <TextInput
          style={styles.input}
          placeholder="🎪🎈🎀"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputCont}>
        <Text style={{ color: "white", fontSize: 18 }}>🎄🎠👗Senha✨🎧🎨:</Text>
        <TextInput
          style={styles.input}
          placeholder="🔮🧸🧬"
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputCont}>
        <Button
          title="Entrar"
          color="#7712c9"
          onPress={() => {
            if (email == emailReal && senha == senhaReal) {
              navigation.navigate("Home");
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#000",
  },
  inputCont: {
    width: "70%",
  },
  input: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: "#7712c9",
    backgroundColor: "#FFF",
  },
});
