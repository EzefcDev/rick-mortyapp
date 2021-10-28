/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function CardCharacter({
  name,
  url,
  specie,
  gender,
  status,
}: any) {
  return (
    <View style={styles.colum}>
      <View style={styles.space}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.dimension}
        />
      </View>
      <View style={styles.space}>
        <Text>Nombre: </Text>
        <Text>{name} </Text>
        <Text>Especie: </Text>
        <Text>{specie} </Text>
        <Text>Genero: </Text>
        <Text>{gender} </Text>
        <Text>Estado: {status} </Text>
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
    height: 150,
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
  dimension: {
    width: 100,
    height: 100,
  },
});
