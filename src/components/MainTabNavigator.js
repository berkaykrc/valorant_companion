import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WeaponsScreen, MapsScreen, BuddiesScreen } from "../screens";
import Icon from 'react-native-vector-icons/FontAwesome';
import AgentStack from "./AgentStack";

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Agents"
                component={AgentStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Weapons"
                component={WeaponsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="rocket" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Buddies"
                component={BuddiesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="users" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Maps"
                component={MapsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="map" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;