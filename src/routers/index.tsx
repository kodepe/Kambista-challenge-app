import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UseAuthContext } from "../contexts/auth/auth-hook";
import HomePage from "../components/pages/home/home";
import { AuthRouter } from "./auth-router";

const Stack = createNativeStackNavigator();

export default function RouterApp() {
  const { session } = UseAuthContext();
  console.log(session);
  if (!session) {
    return <AuthRouter />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
