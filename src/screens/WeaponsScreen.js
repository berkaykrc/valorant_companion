import React, { useEffect } from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import { fetchWeaponData } from "../services/weaponService";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const WeaponsScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.guns);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchWeaponData());
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={data.guns}
          keyExtractor={(item) => item.uuid.toString()}
          renderItem={({ item }) => (
            <View style={styles.weaponContainer}>
              <Image
                style={styles.weaponImage}
                resizeMode="contain"
                source={{ uri: item.displayIcon }}
              />
              <View style={styles.weaponInfo}>
                <Text style={styles.weaponName}>{item.displayName}</Text>
                <Text style={styles.weaponCategory}>
                  {item.shopData?.category || "Not available"}
                </Text>
                <View style={styles.weaponStats}>
                  <Text style={styles.weaponPrice}>
                    {item.shopData?.cost
                      ? `${item.shopData.cost} VP`
                      : "Not available"}
                  </Text>
                  <View style={styles.magazineContainer}>
                    <Icon name="magazine-rifle" />
                    <Text style={styles.magazineSize}>
                      {item.weaponStats?.magazineSize || "Not available"}
                    </Text>
                  </View>
                </View>
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
  weaponContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // change the color to a lower gray tone
    paddingVertical: 10,
    shadowColor: "#999", // add a shadow color
    shadowOffset: { width: 0, height: 1 }, // add a shadow offset
    shadowOpacity: 0.5, // add a shadow opacity
    shadowRadius: 1, // add a shadow radius
  },
  weaponImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  weaponInfo: {
    flex: 1,
  },
  weaponName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  weaponCategory: {
    fontSize: 16,
  },
  weaponStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  weaponPrice: {
    fontSize: 16,
    marginRight: 10,
  },
  magazineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  magazineIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  magazineSize: {
    fontSize: 16,
  },
});

export { WeaponsScreen };