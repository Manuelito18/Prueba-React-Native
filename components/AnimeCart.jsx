import { useEffect, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score.jsx";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function AnimeCart({ anime }) {
  return (
    <Link asChild href={`/${anime.mal_id}`}>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View className="flex-row gap-4">
          <Image source={{ uri: anime.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-10" style={styles.title}>
              {anime.title}
            </Text>
            <Score score={anime.score} maxScore={100} />
            <Text
              className="mt-2 flex-shrink "
              style={styles.synopsis}
              numberOfLines={5}
            >
              {anime.synopsis.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedAnimeCard({ anime, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [index, opacity]);
  return (
    <Animated.View style={{ opacity }}>
      <AnimeCart anime={anime} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 40,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  synopsis: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 5,
  },
  score: {
    color: "#ff0",
    fontSize: 16,
    marginTop: 5,
  },
});
