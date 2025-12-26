import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const cerati = require("./assets/cerati.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={cerati} style={{ width: 100, height: 100 }} />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA8cVPyYr_UZb1UVBTrcP9s4quRNax2ksIA&s",
        }}
        style={{
          width: 100,
          height: 200,
          resizeMode: "contain",
        }}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
