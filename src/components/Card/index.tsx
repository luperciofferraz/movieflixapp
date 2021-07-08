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
  
  const movieId = movie.id;

  function handleOnPress()  {

    navigation.navigate('Details', { movieId });

  }

  return (

      
      <View style={styles.container}>
      
        <Image
          source={{ uri: movie.imgUrl }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          
          <Text style={styles.title}>{movie.title}</Text>
          
          <Text style={styles.year}>{movie.year}</Text>

          <Text style={styles.subtitle}>{movie.subTitle}</Text>

        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleOnPress()}
          {...rest}
        >
          
          <Text style={styles.buttonText}>VER DETALHES</Text>

        </TouchableOpacity>

      </View>

  );
}