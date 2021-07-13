import React, { useCallback, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Movie, Review } from '../../types';
import { makePrivateRequest } from '../../services/auth';
import { DetailCard } from '../../components/DetailCard';
import { Form } from '../../components/Form';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Reviews } from '../../components/Reviews';
import { isAllowedByRole } from '../../services/auth';

type ParamsType = {
    movieId: string;
}

export function Details() {

    const [listaReviews, setListaReviews] = useState<Review[]>();
    const [canPostReview, setCanPostReview] = useState(false);
    const [movie, setMovie] = useState<Movie>();

    const route = useRoute();
    const { movieId } = route.params as ParamsType;

    async function handleCanPostReview() {

        const result = await isAllowedByRole(['ROLE_MEMBER']);

        result ? setCanPostReview(true) : setCanPostReview(false);

    }

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

    useEffect(() => {

        handleCanPostReview();

    },  []);

    return (

        <ScrollView 
            style={styles.container} 
            keyboardShouldPersistTaps={'handled'}>
            
            <DetailCard 
                movie={movie}
            />

            {canPostReview &&            

                <Form 
                    listaReviews = {listaReviews}
                    setListaReviews = {setListaReviews}
                />

            }

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
