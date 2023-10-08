import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchAgentById, fetchAgentsData } from "../services/agentServices";

function AgentList({ navigation }) {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents);
  const error = useSelector((state) => state.error);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAgentsData()).then(() => setLoading(false));
  }, []);

  const handleAgentPress = (item) => {
    dispatch(fetchAgentById({ uuid: item.uuid }));
  };

  if (error) {
    return <Text>{error}</Text>;
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={agents.agents}
      keyExtractor={(item) => item.uuid.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("AgentDetails", { agent: item.uuid });
            handleAgentPress(item);
          }}
          style={styles.agentContainer}
        >
          <Image
            style={styles.agentImage}
            source={{ uri: item.displayIcon }}
            resizeMode="contain"
          />
          <Text style={styles.agentName}>{item.displayName}</Text>
        </Pressable>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  agentContainer: {
    width: "45%",
    margin: 8,
    alignItems: "center",
  },
  agentImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  agentName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AgentList;
