import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> UserPage </Text>
      </View>
    );
  }
}

export default UserPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});