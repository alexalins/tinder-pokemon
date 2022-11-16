import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import CardPokemon from '../components/CardPokemon';
import ImageApi from '../service/ImageApi';
import PokeApi from '../service/PokeApi';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            image: ImageApi(1),
            pokemon: '',
            visible: false,
            message: ''
        };
    }

    click = () =>
    {
        let { id } = this.state;
        ++id;
        if (id <= 150) {
            this.setState({ id: id, image: ImageApi(id)});
        }
        this.getPokemon(id);
    }

    like = () => {
        this.click()
        this.setState({ message: 'Like! Pokémon adicionado na sua bag!' })
        this.onToggleSnackBar()
    }

    close = () => {
        this.click()
        this.onToggleSnackBar()
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
    onToggleSnackBar = () => {
        this.setState({ visible: !this.state.visible}) 
        console.log(this.state.visible)
    };

    onDismissSnackBar = () => this.setState({ visible: false});

    render() {
        return (
            <View style={styles.container}>
                <CardPokemon image={this.state.image} onPressLike={this.like} onPressClose={this.close} pokemon={this.state.pokemon} />
                <Snackbar
                    visible={this.state.visible}
                    onDismiss={this.onDismissSnackBar}
                    action={{
                    label: 'Fechar',
                    }}>
                    {this.state.message}
                </Snackbar>
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