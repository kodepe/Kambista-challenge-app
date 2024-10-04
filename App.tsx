import "./global.css";
import { Text, View } from "react-native";
import RouterApp from "./src/routers";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/contexts/auth/auth-provider";

export default function App() {
  return (
    <PaperProvider>
      <View className="flex-1 bg-[#FFF]" style={{ backgroundColor: "#FFF" }}>
        <StatusBar hidden />
        <AuthProvider>
          <RouterApp />
        </AuthProvider>
      </View>
    </PaperProvider>
  );
}
