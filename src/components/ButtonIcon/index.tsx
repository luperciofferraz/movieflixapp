import React from 'react';
import { Text, View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import ArrowIcon from '../../assets/arrow.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    text: string;
    handleOnPress: Function;
}

export function ButtonIcon({ text, handleOnPress, ...rest } : Props) {

    return (

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleOnPress()}
          {...rest}
        >
          
          <Text style={styles.buttonText}>{text}</Text>
          
          <View style={styles.arrowContainer}>
          
            <Image source={ArrowIcon} />
          
          </View>

        </TouchableOpacity>

    );
}