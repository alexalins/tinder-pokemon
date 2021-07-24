import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const CardPokemon = (props) => (
    <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://pokeres.bastionbot.org/images/pokemon/4.png' }}  style={styles.image}/>
        <Card.Title title="Chamander" subtitle="Id: 4, type: Fogo" />
    </Card>
);

export default CardPokemon;


const styles = StyleSheet.create({
    card: {
        marginTop: '30%',
        marginBottom: '30%',
        alignSelf: 'center',
        borderRadius: 20
    }, 
    image: {
        height: 400,
        width: 400
    }
});