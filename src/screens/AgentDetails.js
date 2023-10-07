import React from "react";
import { View, Text } from "react-native";

const AgentDetails = ({ route }) => {
  const { agent } = route.params;
  console.log(agent.uuid);
  return (
    <View>
      <Text>Agent Details</Text>
    </View>
  );
};

export { AgentDetails };
