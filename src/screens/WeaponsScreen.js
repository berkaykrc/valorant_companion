import React, { useEffect } from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import { fetchWeaponData } from "../services/gunsService";
import { useSelector, useDispatch } from "react-redux";

const WeaponsScreen = () => {
  const dispatch = useDispatch();
  const guns = useSelector((state) => state.guns);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (guns) {
      return;
    }
    dispatch(fetchWeaponData());
  }, [guns]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={guns}
        keyExtractor={(item) => item.uuid.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{
                uri: item.displayIcon,
              }}
            />
            <Text style={styles.title}>{item.displayName}</Text>
            <Text style={styles.description}>{item.shopData.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export { WeaponsScreen };
