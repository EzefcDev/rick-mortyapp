/* eslint-disable prettier/prettier */
import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text} from 'react-native';

import {gql, useQuery} from '@apollo/client';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CardCharacter} from '../components/card';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        species
        gender
        image
        status
      }
    }
  }
`;

export default function CharactersScreen() {
  const {loading, error, data} = useQuery(GET_CHARACTERS);

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }
  if (error) {
    return <Text>Error loading data</Text>;
  }

  const dato = data.characters.results;

  return (
    <>
      <SafeAreaView style={styles.center}>
        <ScrollView>
          {dato.map(({name, image, species, gender, status}: any) => {
            return (
              <CardCharacter
                key={name}
                name={name}
                url={image}
                specie={species}
                gender={gender}
                status={status}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
