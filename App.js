import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './src/page/HomePage';
import UserPage from './src/page/UserPage';
import PokedexPage from './src/page/PokedexPage';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions ={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name='Home' component={HomePage} options={{
          tabBarLabel:'Home',
          tabBarIcon:({color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} />
         <Tab.Screen name='Pokedex' component={PokedexPage} options={{
          tabBarLabel:'Pokédex',
          tabBarIcon:({color, size}) => (
            <Ionicons name="logo-octocat" size={size} color={color} />
          ),
        }}/>
        <Tab.Screen name='User' component={UserPage} options={{
          tabBarLabel:'User',
          tabBarIcon:({color, size}) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;