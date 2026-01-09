import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { getTopAnimes } from "../lib/jikan";
import { AnimatedAnimeCard } from "./AnimeCart.jsx";
import { Screen } from "./Screen.jsx";

export function Main() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getTopAnimes().then((animes) => {
      setAnimes(animes);
    });
  }, []);
  return (
    <Screen>
      {animes.length === 0 ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={animes}
          keyExtractor={(animes) => animes.mal_id.toString()}
          renderItem={({ item, index }) => (
            <AnimatedAnimeCard anime={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
