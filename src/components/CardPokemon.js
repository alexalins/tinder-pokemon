import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import PokemonUtils from '../util/PokemonUtil';
import ButtonChoice from './ButtonChoice';


const CardPokemon = (props) => {
    const { image, onPressLike, onPressClose, pokemon } = props;
    const { id, name } = pokemon;
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: image }} style={styles.image} />
            <Card.Title titleStyle={styles.firstLetter} title={name} subtitle={`Id: ${PokemonUtils.formatId(id)}`} />
            <Card.Actions style={styles.containerButtons}>
                <ButtonChoice icon="close" style={styles.buttonClose} click={onPressClose}/>
                <ButtonChoice icon="heart" style={styles.buttonCheck} click={onPressLike}/>
            </Card.Actions>
        </Card>
    );
};

export default CardPokemon;


const styles = StyleSheet.create({
    card: {
        marginTop: 150,
        marginBottom: 180,
        alignSelf: 'center',
        borderRadius: 20,
    },
    image: {
        height: 400,
        width: 400
    },
    buttonCheck: {
        backgroundColor: '#006600',
        marginLeft: 50
    },
    buttonClose: {
        backgroundColor: '#cc0000',
        marginRight: 50
    },
    containerButtons: {
        marginTop: '15%',
        alignSelf: 'center',
    },
    firstLetter: {
        textTransform: 'capitalize'
    }
});