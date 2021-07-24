import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import ButtonChoice from './ButtonChoice';


const CardPokemon = (props) => (
    <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://pokeres.bastionbot.org/images/pokemon/4.png' }} style={styles.image} />
        <Card.Title title="Chamander" subtitle="Id: 4, tipo: Fogo" />
        <Card.Actions style={styles.containerButtons}>
            <ButtonChoice icon="close" style={styles.buttonClose} />
            <ButtonChoice icon="check" style={styles.buttonCheck} />
        </Card.Actions>
    </Card>
);

export default CardPokemon;


const styles = StyleSheet.create({
    card: {
        marginTop: '20%',
        marginBottom: '15%',
        alignSelf: 'center',
        borderRadius: 20
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