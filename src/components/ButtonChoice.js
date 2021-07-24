import React from 'react';
import { FAB } from 'react-native-paper';

const ButtonChoice = (props) => {
    const { style, icon, click } = props;
    return (
        <FAB style={style} large icon={icon} onPress={() => click()} />
    );
};

export default ButtonChoice;
