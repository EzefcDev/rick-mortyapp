/* eslint-disable prettier/prettier */

import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import {gql, useQuery} from '@apollo/client';
import {CardPlace} from '../components/card';

const GET_LOCATIONS = gql`
  query {
    locations {
      results {
        name
        type
        dimension
      }
    }
  }
`;

export default function PlacesScreen() {
  const {loading, error, data} = useQuery(GET_LOCATIONS);

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }
  if (error) {
    return <Text>Error loading data</Text>;
  }

  const dato = data.locations.results;

  return (
    <>
      <SafeAreaView style={styles.center}>
        <ScrollView>
          {dato.map(({name, type, dimension}: any) => {
            return (
              <CardPlace
                key={name}
                name={name}
                type={type}
                dimension={dimension}
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
