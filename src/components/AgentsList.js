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
//import { useNavigation } from '@react-navigation/native';

function AgentList({ navigation }) {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents);
  const error = useSelector((state) => state.error);
  //const navigation = useNavigation(); // add this line to get the navigation object

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (agents) {
      setLoading(false);
      return;
    }
    dispatch(fetchAgentsData());
    setLoading(false);
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  console.log(agents);
  return (
    <View style={styles.container}>
      <FlatList
        data={agents}
        keyExtractor={(item) => item.uuid.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("AgentDetails", { agent: item.uuid });
              dispatch(fetchAgentById(item.uuid));
            }}
            style={styles.agentContainer}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={{ uri: item.displayIcon }}
              resizeMode="contain"
            />
            <Text>{item.displayName}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
  },
  agentContainer: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 8,
  },
});

export default AgentList;
