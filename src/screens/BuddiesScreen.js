import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { fetchBuddiesData } from "../services/buddiesService";
import { useSelector, useDispatch } from "react-redux";

const BuddiesScreen = () => {
  const dispatch = useDispatch();
  const buddies = useSelector((state) => state.buddies.buddies);
  const error = useSelector((state) => state.error);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchBuddiesData())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  if (!buddies && isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderBuddy = ({ item }) => (
    <View style={styles.buddyContainer}>
      <Image
        source={{ uri: item.displayIcon }}
        style={styles.buddyImage}
        resizeMode="contain"
      />
      <Text style={styles.buddyName}>{item.displayName}</Text>
    </View>
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBuddies = buddies.filter((buddy) =>
    buddy.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search buddies..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={filteredBuddies}
          renderItem={renderBuddy}
          keyExtractor={(item) => item.uuid}
          contentContainerStyle={styles.buddiesContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  buddiesContainer: {
    alignItems: "center",
  },
  buddyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  buddyImage: {
    width: 50,
    height: 50,
    backgroundColor: "#333",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  buddyName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  searchContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    fontSize: 18,
    height: 40,
  },
  error: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});

export { BuddiesScreen };
