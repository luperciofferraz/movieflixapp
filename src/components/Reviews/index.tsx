import React from 'react';
import {View, Text} from 'react-native';
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

            {listaReviews?.map( review => (
                
                <View key={review.id}>
                    
                    <View style={styles.movieReviewsAutor}>
                        <View style={styles.movieReviewsStarImage}>
                            <StarImage />
                        </View>
                        <Text style={styles.movieReviewsAutorName}>
                            {review.user.name}
                        </Text>
                    </View>
                    <Text style={styles.movieReviewsText}>
                        {review.text}
                    </Text>

                </View>
            ))}
        
        </View>

    );

}