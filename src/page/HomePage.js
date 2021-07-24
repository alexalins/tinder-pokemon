import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardPokemon from '../components/CardPokemon';
import ImageApi from '../service/ImageApi';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 1,
        image: ImageApi(1)
    };
  }

  like = () => {
    let {id} = this.state;
    if(id <= 150) {
        this.setState({ id: ++id });
    }
    this.setState({ image: ImageApi(this.state.id)});
  }

  render() {
    return (
      <View>
        <CardPokemon image={ this.state.image } onPress={this.like}/>
      </View>
    );
  }
}

export default HomePage;
