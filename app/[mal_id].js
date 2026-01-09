import { useLocalSearchParams, Stack } from "expo-router";
import { ScrollView, Text, ActivityIndicator, View, Image } from "react-native";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getDataAnime } from "../lib/jikan";
import { Score } from "../components/Score";

export default function Detail() {
  const { mal_id } = useLocalSearchParams();
  const [animeInfo, setAnimeInfo] = useState(null);

  useEffect(() => {
    getDataAnime(mal_id).then(setAnimeInfo);
  }, [mal_id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "gold" },
          headerTintColor: "black",
          headerLeft: () => null,
          headerTitle: "Sousou no Frieren",
          headerRight: () => null,
        }}
      />
      <View>
        {animeInfo == null ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: animeInfo.imageFull }}
                style={{ width: 213.5, height: 300 }}
              />
              <Score score={animeInfo.score} maxScore={100} />
              <Text className="text-white font-bold text-2xl text-center">
                {animeInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {animeInfo.synopsis}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
