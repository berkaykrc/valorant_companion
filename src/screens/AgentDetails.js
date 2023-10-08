import React from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useSelector } from "react-redux";

const AgentDetails = () => {
  const agentData = useSelector((state) => state.agents.agent);

  if (!agentData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const ultimateAbility = agentData.abilities.find((ability) => ability.slot === "Ultimate");

  return (
    <View style={styles.container}>
      <Image source={{ uri: agentData.displayIcon }} style={styles.image} />
      <Text style={styles.name}>{agentData.displayName}</Text>
      <Text style={styles.role}>{agentData.role.displayName}</Text>
      <Text style={styles.description}>{agentData.description}</Text>
      <View style={styles.abilityContainer}>
        <Image source={{ uri: ultimateAbility.displayIcon }} style={styles.abilityImage} />
        <View style={styles.abilityTextContainer}>
          <Text style={styles.abilityName}>{ultimateAbility.displayName}</Text>
          <Text style={styles.abilityDescription}>{ultimateAbility.description}</Text>
        </View>
      </View>
      <ScrollView style={[styles.abilitiesContainer, { maxHeight: Dimensions.get("window").height / 4 }]}>
        {agentData.abilities
          .filter((ability) => ability.slot !== "Ultimate")
          .map((ability) => (
            <View key={ability.slot} style={styles.abilityContainer}>
              <Image source={{ uri: ability.displayIcon }} style={styles.abilityImage} />
              <View style={styles.abilityTextContainer}>
                <Text style={styles.abilityName}>{ability.displayName}</Text>
                <Text style={styles.abilityDescription}>{ability.description}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  role: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  abilityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  abilityImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    backgroundColor: "#333",
    borderRadius: 25, // add a borderRadius property to make the icon circular
  },
  abilityTextContainer: {
    flex: 1,
  },
  abilityName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  abilityDescription: {
    fontSize: 16,
  },
  abilitiesContainer: {
    width: "100%",
  },
});

export { AgentDetails };