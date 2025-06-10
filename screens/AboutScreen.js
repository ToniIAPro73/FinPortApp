import { View, Text, Button } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View className="flex items-center justify-center h-screen bg-green-500">
      <Text className="text-white text-lg">Acerca de FinPortApp</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
