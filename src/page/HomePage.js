import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardPokemon from '../components/CardPokemon';
import ImageApi from '../service/ImageApi';
import PokeApi from '../service/PokeApi';

class HomePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            image: ImageApi(1),
            pokemon: ''
        };
    }

    like = () => {
        let { id } = this.state;
        ++id;
        if (id <= 150) {
            console.log(id)
            this.setState({ id: id, image: ImageApi(id)});
        }
        this.getPokemon(id);
        
    }

    componentDidMount() {
        this.getPokemon(1);
    }

    getPokemon(id) {
        PokeApi.get(`/${id}`)
            .then((response) => {
                this.setState({ pokemon: response.data })
                })
            .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                })
    }

    render() {
        return (
            <View style={styles.container}>
                <CardPokemon image={this.state.image} onPress={this.like} pokemon={this.state.pokemon} />
            </View>
        );
    }
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6e6'
    },
});