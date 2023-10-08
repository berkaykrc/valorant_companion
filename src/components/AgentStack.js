import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AgentList from "./AgentsList";
import { AgentDetails } from "../screens";

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
