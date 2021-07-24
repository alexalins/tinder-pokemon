import React from 'react';
import { FAB } from 'react-native-paper';

const ButtonChoice = (props) => {
    const { style, icon } = props;
    return (
        <FAB style={style} large icon={icon} onPress={() => console.log('Pressed')} />
    );
};

export default ButtonChoice;
