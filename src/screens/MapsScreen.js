import React, { useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { fetchMapData } from "../services/mapService";
import { useSelector, useDispatch } from "react-redux";

const MapsScreen = () => {
  const dispatch = useDispatch();
  const maps = useSelector((state) => state.maps.maps);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchMapData());
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.mapContainer}>
      <Image source={{ uri: item.listViewIcon }} style={styles.mapImage} />
      <View style={styles.mapInfo}>
        <Text style={styles.mapName}>{item.displayName}</Text>
        <Text style={styles.mapDescription}>{item.narrativeDescription}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={maps}
          keyExtractor={(item) => item.uuid.toString()}
          renderItem={renderItem}
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
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
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
    marginBottom: 5,
    color: "#333",
  },
  mapDescription: {
    fontSize: 16,
    color: "#666",
  },
});

export { MapsScreen };