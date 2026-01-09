import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColor = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 7.5) return "bg-green-500";
    if (percentage >= 5.0) return "bg-yellow-500";
    if (percentage >= 2.5) return "bg-red-500";
    return "bg-white-500";
  };
  const className = getColor();
  return (
    <View
      className={`${className} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-sm font-bold text-white">{score}</Text>
    </View>
  );
}
