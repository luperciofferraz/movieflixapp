import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Movie, Review } from '../../types';
import { makePrivateRequest } from '../../services/requests';
import { isAllowedByRole } from '../../services/auth';
import { DetailCard } from '../../components/DetailCard';
import { Form } from '../../components/Form';

type ParamsType = {
    movieId: string;
}

export function Details() {

    const [listaReviews, setListaReviews] = useState<Review[]>();
    const [movie, setMovie] = useState<Movie>();
    const [description, setDescription] = useState('');

    const route = useRoute();
    const { movieId } = route.params as ParamsType;

    const getReviews = useCallback(() => {

        console.warn(movieId);

        makePrivateRequest({ url: `/movies/${movieId}` })
        
        .then(response => 
            {
                console.log(response.data);
                setMovie(response.data);
                setListaReviews(response.data.reviews);
            }
        )

    },[movieId]);

    useEffect(() => {

        getReviews();

    },  [getReviews]);

    return (

        <View>
            
            <DetailCard 
                movie={movie}
            />

            <Form 
                listaReviews = {listaReviews}
                setListaReviews = {setListaReviews}
            />

            {listaReviews?.length ?

            <View>

                {listaReviews?.map( review => (
                    <View key={review.id}>
                        <View>
                            <Text>
                                {review.user.name}
                            </Text>
                        </View>
                        <Text>
                            {review.text}
                        </Text>
                    </View>
                ))}

            </View>

            : <></>

            }

        </View>

    );

};
