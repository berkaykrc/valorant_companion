import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Dimensions,
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

  if (isLoading || !buddies) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={filteredBuddies}
          renderItem={({ item }) => (
            <View style={styles.buddyContainer}>
              <Image
                source={{ uri: item.displayIcon }}
                style={styles.buddyImage}
                resizeMode="contain"
              />
              <Text style={styles.buddyName}>{item.displayName}</Text>
            </View>
          )}
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
    padding: 16,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
  },
  buddiesContainer: {
    width: Dimensions.get("window").width - 32,
  },
  buddyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get("window").width - 32,
    shadowColor: "#999", // add a shadow color
    shadowOffset: { width: 0, height: 2 }, // add a shadow offset
    shadowOpacity: 0.5, // add a shadow opacity
    shadowRadius: 2, // add a shadow radius
  },
  buddyImage: {
    width: 50,
    height: 150,
    backgroundColor: "#333",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  buddyName: {
    flex: 1,
    fontSize: 18,
    backgroundColor: "white",
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
