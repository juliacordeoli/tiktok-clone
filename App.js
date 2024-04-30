import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./.expo/src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle="light-content"
        translucent={true}
      />
      <Routes />
    </NavigationContainer>
  );
}
