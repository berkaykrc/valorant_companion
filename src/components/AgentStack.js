import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgentScreen, AgentDetails } from "../screens";

const Stack = createNativeStackNavigator();

function AgentStack() {
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

export default AgentStack;