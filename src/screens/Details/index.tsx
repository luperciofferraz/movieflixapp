import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Movie, Review } from '../../types';
import { makePrivateRequest } from '../../services/auth';
import { DetailCard } from '../../components/DetailCard';
import { Form } from '../../components/Form';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Reviews } from '../../components/Reviews';

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
                setListaReviews(response.data.reviews.reverse());
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

                <Reviews 
                    listaReviews={listaReviews} 
                />
                
                :

                <></>
            } 

        </ScrollView>

    );

};
