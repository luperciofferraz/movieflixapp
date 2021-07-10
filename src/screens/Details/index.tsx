import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Movie, Review } from '../../types';
import { makePrivateRequest } from '../../services/auth';
import { DetailCard } from '../../components/DetailCard';
import { Form } from '../../components/Form';
import StarImage from '../../assets/star.svg';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

type ParamsType = {
    movieId: string;
}

export function Details() {

    const [listaReviews, setListaReviews] = useState<Review[]>();
    const [movie, setMovie] = useState<Movie>();

    const route = useRoute();
    const { movieId } = route.params as ParamsType;

    const getReviews = useCallback(() => {

        makePrivateRequest({ url: `/movies/${movieId}` })
        
        .then(response => 
            {
                setMovie(response.data);
                console.log(response.data);
                console.log(response.data.reviews);
                setListaReviews(response.data.reviews);
            }
        )

    },[movieId]);

    useEffect(() => {

        getReviews();

    },  [getReviews]);

    return (

        <ScrollView style={styles.container}>
            
            <DetailCard 
                movie={movie}
            />

            <Form 
                listaReviews = {listaReviews}
                setListaReviews = {setListaReviews}
            />



            {listaReviews?.length ? 

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
                
                :

                <></>
            } 

            
            

        </ScrollView>

    );

};
