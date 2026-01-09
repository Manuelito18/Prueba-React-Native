import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Main } from "./components/Main.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    /* alignItems: "center", */
    justifyContent: "center",
    padding: 12,
    paddingHorizontal: 12,
  },
});
