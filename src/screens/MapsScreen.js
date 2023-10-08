import React, { useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { fetchMapData } from "../services/mapService";
import { useSelector, useDispatch } from "react-redux";

const MapsScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.maps);
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
          data={data.maps}
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
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  mapImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  mapInfo: {
    flex: 1,
  },
  mapName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mapDescription: {
    fontSize: 16,
  },
});

export { MapsScreen };