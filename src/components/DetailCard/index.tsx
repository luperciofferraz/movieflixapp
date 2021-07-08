import React from 'react';
import { Text, View, Image } from 'react-native';
import { Movie } from '../../types';
import { styles } from './styles';

type Props = {
  movie?: Movie;
}

export function DetailCard({ movie } : Props) {

  return (
      
    <View style={styles.container}>

      <Text style={styles.title}>{movie?.title}</Text>

      <Image
        source={{ uri: movie?.imgUrl }}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        
        <Text style={styles.year}>{movie?.year}</Text>

        <Text style={styles.subtitle}>{movie?.subTitle}</Text>

      </View>

      <Text style={styles.sinopseTitle}>Sinopse</Text>

      <View style={styles.sinopseContainer}>

        <Text style={styles.sinopseText}>{movie?.synopsis}</Text>

      </View>

    </View>

  );
}