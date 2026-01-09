import { Pressable, View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { DataIcon } from "../components/Icons.jsx";
import { Logo } from "../components/Logo.jsx";

export default function Layout() {
  return (
    <View className="flex-1">
      {/* <Text className="text-white">Layout</Text> */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "right",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Logo
                style={{
                  alignSelf: "center",
                  height: 40,
                  width: 40,
                }}
              />
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                Top Series
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <DataIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

{
  /* <app>
  <View className="flex-row justify-between items-center mb-4 mx-2">
    
  </View>

 */
}
