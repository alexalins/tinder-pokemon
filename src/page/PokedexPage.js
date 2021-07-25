import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PokedexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> PokedexPage </Text>
      </View>
    );
  }
}

export default PokedexPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});