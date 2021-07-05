import React from 'react';
import { Text, View, Image } from 'react-native';
import { Movie } from '../../types';

type Props = {
  movie?: Movie;
}

export function DetailCard({ movie } : Props) {

  return (
      
      <View>

        <View>
          
          <Text>{movie?.title}</Text>
          
        </View>

        <Image
          source={{ uri: movie?.imgUrl }}
          style={{ width: 140, height: 140, margin: 16 }}
        />

        <View>
          
          <Text>{movie?.year}</Text>

          <Text>{movie?.subTitle}</Text>

        </View>

        <View>
          
          <Text>{movie?.synopsis}</Text>
          
        </View>

      </View>

  );
}