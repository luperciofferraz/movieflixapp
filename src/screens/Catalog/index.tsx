import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList, View
} from "react-native";
import { makeRequest } from '../../services/auth';
import { Filter } from '../../components/Filter';

import { Genre, MoviesResponse } from '../../types'
import { Card } from '../../components/Card';
import { styles } from './styles';

export function Catalog() {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [genre, setGenre] = useState<Genre>();

    const getMovies = useCallback(()=> {

        const params = {
            genreId: genre?.id
        }

        makeRequest({ url: '/movies', params })
           
        .then(response => {

            setMoviesResponse(response.data)
        
        });

    }, [genre]);

    useEffect( () => {
        
        getMovies();

    }, [getMovies]);

    const handleChangeGenre = (genre: Genre) => {
        setGenre(genre);
    }

    return    (

        <View style={styles.container}>

            <Filter 
                handleChangeGenre={handleChangeGenre}
            />

            <FlatList
                data={moviesResponse?.content}
                keyExtractor={ item => item.id.toString()}
                renderItem={ ({ item }) => (
                    <Card movie={item} />
                )}
                showsVerticalScrollIndicator={false}
            />

        </View>

    )

};

