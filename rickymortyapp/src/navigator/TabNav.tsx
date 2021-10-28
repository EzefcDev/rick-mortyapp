/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharactersScreen, EpisodesScreen, PlacesScreen} from '../screens';
import Icon from '../components/svg/Icon';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: 'blue',
        labelStyle: {
          fontSize: 14,
          fontFamily: 'ComicNeue-BoldItalic',
        },
      }}>
      <Tab.Screen
        name="Personajes"
        component={CharactersScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="character"
              focused={focused}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lugares"
        component={PlacesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="place" focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Episodios"
        component={EpisodesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="episode" focused={focused} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
