import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Movie, Review } from '../../types';
import { makePrivateRequest } from '../../services/auth';
import { DetailCard } from '../../components/DetailCard';
import { Form } from '../../components/Form';
import { SafeAreaView } from 'react-native-safe-area-context';
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

                <View>

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

                </View>

                : <></>

            }

        </ScrollView>

    );

};
