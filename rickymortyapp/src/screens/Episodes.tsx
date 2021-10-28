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
import {CardEpisode} from '../components/card';

const GET_EPISODES = gql`
  query {
    episodes {
      results {
        name
        air_date
        episode
      }
    }
  }
`;

export default function EpisodesScreen() {
  const {loading, error, data} = useQuery(GET_EPISODES);

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }
  if (error) {
    return <Text>Error loading data</Text>;
  }

  const dato = data.episodes.results;
  return (
    <>
      <SafeAreaView style={styles.center}>
        <ScrollView>
          {dato.map(({name, air_date, episode}: any) => {
            return (
              <CardEpisode
                key={name}
                name={name}
                date={air_date}
                cod={episode}
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
