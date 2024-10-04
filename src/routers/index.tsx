import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UseAuthContext } from "../contexts/auth/auth-hook";
import HomePage from "../components/pages/home/home";
import { AuthRouter } from "./auth-router";
import AccountsPage from "../components/pages/accounts/accounts";
import RegisterAccountPage from "../components/pages/register-account/register-account";
import SentConstancyPage from "../components/pages/sent-constancy/sent-constancy";

const Stack = createNativeStackNavigator();

export default function RouterApp() {
  const { session } = UseAuthContext();
  if (!session) {
    return <AuthRouter />;
  }
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="accounts"
          component={AccountsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register-accounts"
          component={RegisterAccountPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sent-constancy"
          component={SentConstancyPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
