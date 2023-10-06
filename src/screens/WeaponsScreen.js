import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeaponsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Weapon List
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export { WeaponsScreen };