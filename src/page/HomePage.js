import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardPokemon from '../components/CardPokemon';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <CardPokemon />
      </View>
    );
  }
}

export default HomePage;
