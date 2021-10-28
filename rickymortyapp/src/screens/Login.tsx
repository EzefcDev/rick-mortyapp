/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen(props) {
  return (
    <View style={styles.center}>
      <View style={styles.colum}>
        <Text style={styles.font}> E-mail: </Text>
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>
      <View style={styles.colum}>
        <Text style={styles.font}> Escribe un password: </Text>
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.colum}>
        <View style={styles.separate}>
          <Button
            onPress={() => props.navigation.navigate('Register')}
            title="Registrase"
            color="#841584"
          />
        </View>
        <View style={styles.separate}>
          <Button
            onPress={() => props.navigation.navigate('Home')}
            title="Aceptar"
            color="#841584"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.separate}
        onPress={() => props.navigation.navigate('Reset')}>
        <Text>Olvidaste tu password?</Text>
      </TouchableOpacity>
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
  separate: {
    margin: 10,
    padding: 20,
  },
});
