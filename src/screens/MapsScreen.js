import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMapData } from "../services/mapService";

const MapsScreen = () => {
  const dispatch = useDispatch();
  const maps = useSelector((state) => state.maps.maps);
  const error = useSelector((state) => state.error);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchMapData())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading || !maps) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={maps}
          keyExtractor={(item) => item.uuid.toString()}
          renderItem={({ item }) => (
            <View style={styles.mapContainer}>
              <Image source={{ uri: item.listViewIcon }} style={styles.mapImage} />
              <View style={styles.mapInfo}>
                <Text style={styles.mapName}>{item.displayName}</Text>
                <Text style={styles.mapDescription}>{item.narrativeDescription}</Text>
              </View>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  error: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 10,
  },
  mapContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mapDescription: {
    fontSize: 16,
    color: "#666",
  },
  mapImage: {
    width: 390,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  mapInfo: {
    flex: 1,
    alignItems: "center",
  },
  mapName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#333",
  },
});

export { MapsScreen };