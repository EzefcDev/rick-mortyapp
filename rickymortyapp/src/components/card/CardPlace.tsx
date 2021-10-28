/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CardPlace({name, type, dimension}: any) {
  return (
    <View style={styles.colum}>
      <View style={styles.center}>
        <Text>Lugar: {name}</Text>
        <Text>Tipo: {type}</Text>
        <Text>Dimension: {dimension}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  colum: {
    flexDirection: 'row',
    width: 350,
    height: 110,
    padding: 5,
    marginTop: 10,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
  },
  space: {
    marginRight: 10,
  },
});
