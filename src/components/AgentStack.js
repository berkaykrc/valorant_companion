import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgentDetails } from "../screens";
import AgentList from "./AgentsList";

const Stack = createNativeStackNavigator();

function AgentStack() {
  return (
    <Stack.Navigator
      initialRouteName="AgentsList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AgentsList" component={AgentList} />
      <Stack.Screen name="AgentDetails" component={AgentDetails} />
    </Stack.Navigator>
  );
}

export default AgentStack;
