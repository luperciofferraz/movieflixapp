import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Movie, Review } from '../../types';
import { makePrivateRequest } from '../../services/requests';
import { DetailCard } from '../../components/DetailCard';
import { Form } from '../../components/Form';
import { SafeAreaView } from 'react-native-safe-area-context';

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

                <SafeAreaView>
                    <FlatList
                        data={listaReviews}
                        keyExtractor={ item => item.id.toString()}
                        renderItem={ ({ item }) => (
                            <View key={item.id}>
                                <View>
                                    <Text>
                                        {item.user.name}
                                    </Text>
                                </View>
                                <Text>
                                    {item.text}
                                </Text>
                            </View>
                        )}
                        showsVerticalScrollIndicator={true}
                    />
                </SafeAreaView>
                : <></>

            }

        </View>

    );

};
