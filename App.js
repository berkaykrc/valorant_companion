import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AgentScreen,
  AgentDetails,
  WeaponsScreen,
  MapsScreen,
  BuddiesScreen,
} from "./src/screens";
import MainProvider from "./src/store/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AgentStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Agents"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AgentsList" component={AgentScreen} />
      <Stack.Screen name="AgentDetails" component={AgentDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <MainProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Agents" component={AgentStackScreen} />
          <Tab.Screen name="Weapons" component={WeaponsScreen} />
          <Tab.Screen name="Buddies" component={BuddiesScreen} />
          <Tab.Screen name="Maps" component={MapsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}