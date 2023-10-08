import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MainTabNavigator from "./src/components/MainTabNavigator";
import MainProvider from "./src/store/store";

export default function App() {
  return (
    <MainProvider>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </MainProvider>
  );
}
