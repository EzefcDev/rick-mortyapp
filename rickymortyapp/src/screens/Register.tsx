/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={styles.center}>
      <View style={styles.colum}>
        <Text style={styles.font}> Nombre: </Text>
        <TextInput style={styles.input} placeholder="Nombre" />
      </View>
      <View style={styles.colum}>
        <Text style={styles.font}> Apellido: </Text>
        <TextInput style={styles.input} placeholder="Apellido" />
      </View>
      <View style={styles.colum}>
        <Text style={styles.font}> E-mail: </Text>
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>
      <View style={styles.colum}>
        <Text style={styles.font}> Escribe un password: </Text>
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.colum}>
        <Text style={styles.font}> Repite el password: </Text>
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.colum}>
        <Text style={styles.font}> Palabra clave: </Text>
        <TextInput style={styles.input} placeholder="clave" />
      </View>
      <Button
        onPress={() => Alert.alert('Prueba')}
        title="Registrar"
        color="#841584"
      />
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
    alignItems: 'center',
  },
  font: {
    fontSize: 20,
    fontFamily: 'PatrickHand-Regular',
    color: 'red',
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
