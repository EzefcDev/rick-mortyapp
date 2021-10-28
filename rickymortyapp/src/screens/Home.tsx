/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {View} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import TabNav from '../navigator/TabNav';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ApolloProvider client={client}>
        <TabNav />
      </ApolloProvider>
    </View>
  );
}
