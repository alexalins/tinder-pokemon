import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import ButtonChoice from './ButtonChoice';


const CardPokemon = (props) => {
    const { image, onPress, pokemon } = props;
    const { id, name, types } = pokemon;
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: image }} style={styles.image} />
            <Card.Title title={name} subtitle={`Id: ${id}`} />
            <Card.Actions style={styles.containerButtons}>
                <ButtonChoice icon="close" style={styles.buttonClose} />
                <ButtonChoice icon="heart" style={styles.buttonCheck} click={onPress}/>
            </Card.Actions>
        </Card>
    );
};

export default CardPokemon;


const styles = StyleSheet.create({
    card: {
        marginTop: 100,
        marginBottom: 220,
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
        marginTop: '5%',
        alignSelf: 'center',
    }
});