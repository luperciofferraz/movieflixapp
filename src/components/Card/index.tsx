import React from 'react';
import { Text, View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';
import { Movie } from '../../types';

type Props = TouchableOpacityProps & {
    movie: Movie;
}

export function Card({ movie, ...rest } : Props) {

  const navigation = useNavigation();
  
  function handleOnPress()  {

    navigation.navigate('Details', { movie });

  }

  return (

      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleOnPress()}
        {...rest}
      >
        <Image
          source={{ uri: movie.imgUrl }}
          style={{ width: 140, height: 140, margin: 16 }}
        />

        <View>
          <Text>{movie.title}</Text>
          
          <Text>{movie.year}</Text>

          <Text>{movie.subTitle}</Text>
        </View>

      </TouchableOpacity>

  );
}