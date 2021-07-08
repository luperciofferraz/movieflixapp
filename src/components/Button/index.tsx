import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    text: string;
    handleOnPress: Function;
}

export function Button({ text, handleOnPress, ...rest } : Props) {

    return (

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleOnPress()}
          {...rest}
        >
          
          <Text style={styles.buttonText}>{text}</Text>

        </TouchableOpacity>

    );
}