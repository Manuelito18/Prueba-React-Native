import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons.jsx";
import { Screen } from "../components/Screen.jsx";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>
            <HomeIcon />
          </Pressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">About Page</Text>
        <Text className="text-white text-base mb-4">
          This is a simple React Native application built with Expo and Expo
          Router.
        </Text>
        <Text className="text-white text-base mb-4">
          The app showcases a list of anime titles with their respective scores
          and synopses. It demonstrates the use of components, animations, and
          styling in a mobile application context.
        </Text>
        <Text className="text-white text-base mb-4">
          Developed by Manuel. Feel free to explore the code and contribute!
        </Text>
      </ScrollView>
    </Screen>
  );
}
