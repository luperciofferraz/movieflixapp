import React, { useCallback, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Movie, Review } from '../../types';
import { makePrivateRequest } from '../../services/requests';
import { DetailCard } from '../../components/DetailCard';
import { Form } from '../../components/Form';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Reviews } from '../../components/Reviews';
import { useAuth } from '../../hooks/auth';

type ParamsType = {
    movieId: string;
}

export function Details() {

    const  { isAllowedByRole } = useAuth();
    
    const [listaReviews, setListaReviews] = useState<Review[]>();
    const [canPostReview, setCanPostReview] = useState(false);
    const [movie, setMovie] = useState<Movie>();

    const route = useRoute();
    const { movieId } = route.params as ParamsType;

    async function handleCanPostReview() {

        const data = await isAllowedByRole(['ROLE_MEMBER']);

        setCanPostReview(data);

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
