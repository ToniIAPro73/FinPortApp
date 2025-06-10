import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex items-center justify-center h-screen bg-blue-500">
      <Text className="text-white text-lg">¡Bienvenido a FinPortApp!</Text>
      <Button title="Ir a Acerca de" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
