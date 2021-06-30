import React from 'react';
import { Text, View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import ArrowIcon from '../../assets/arrow.png';

type Props = TouchableOpacityProps & {
    text: string;
    handleOnPress: Function;
}

export function ButtonIcon({ text, handleOnPress, ...rest } : Props) {

    return (

        <TouchableOpacity
          onPress={() => handleOnPress()}
          {...rest}
        >
          
          <Text>{text}</Text>
          
          <View>
          
            <Image source={ArrowIcon} />
          
          </View>

        </TouchableOpacity>

    );
}