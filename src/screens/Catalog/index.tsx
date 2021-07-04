import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList, View, Text
} from "react-native";
import { makeRequest } from '../../services/requests';
import { Filter } from '../../components/Filter';

import { Genre, MoviesResponse } from '../../types'

export function Catalog() {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState<Genre>();

    const getMovies = useCallback(()=> {

        const params = {
            page: 0,
            genreId: genre?.id
        }

        makeRequest({ url: '/movies', params })
           
        .then(response => {

            setMoviesResponse(response.data)
        
        });

    }, [activePage, genre]);

    useEffect( () => {
        
        getMovies();

    }, [getMovies]);

    const handleChangeGenre = (genre: Genre) => {
        
        setActivePage(0);
        
        setGenre(genre);
    }

    return    (

        <View>

            <Filter 
                genre={genre} 
                handleChangeGenre={handleChangeGenre}
            />

            <FlatList
                data={moviesResponse?.content}
                keyExtractor={ item => item.id.toString()}
                renderItem={ ({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View> 
                )}
                showsVerticalScrollIndicator={false}
            />

        </View>

    )

};

