import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { styles } from './styles';
import { Review } from '../../types';
import StarImage from '../../assets/star.svg';

type Props = {
    listaReviews: Review[];
}

export function Reviews({ listaReviews }: Props) {

    return (

        <View style={styles.reviewCard}>
                
            <Text style={styles.reviewTitle}>Avaliações</Text>

            <FlatList
                data={listaReviews}
                keyExtractor={ item => item.id.toString()}
                renderItem={ ({ item }) => (
                    <View key={item.id}>
                    
                    <View style={styles.movieReviewsAutor}>
                        <View style={styles.movieReviewsStarImage}>
                            <StarImage />
                        </View>
                        <Text style={styles.movieReviewsAutorName}>
                            {item.user.name}
                        </Text>
                    </View>
                    <Text style={styles.movieReviewsText}>
                        {item.text}
                    </Text>

                </View>

                )}
                showsVerticalScrollIndicator={false}
            />
        
        </View>

    );

}