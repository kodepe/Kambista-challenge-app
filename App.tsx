import "./global.css";
import { Text, View } from "react-native";
import RouterApp from "./src/routers";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View className="flex-1">
        <StatusBar hidden />
        <RouterApp />
      </View>
    </PaperProvider>
  );
}
