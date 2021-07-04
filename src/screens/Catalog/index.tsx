import { useCallback, useEffect, useState } from 'react';
import {
  ScrollView,
  ActivityIndicator,
} from "react-native";

import './styles.scss';
import { Genre, MoviesResponse } from '../../types/Movie'

const Movies = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState<Genre>();

    const getMovies = useCallback(()=> {

        const params = {
            page: activePage,
            linesPerPage: 8,
            genreId: genre?.id
        }

        setIsLoading(true);

        makeRequest({ url: '/movies', params })
           
            .then(response => {

                setMoviesResponse(response.data)
            
            })
            .finally(() => {

                setIsLoading(false) 

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

      <ScrollView contentContainerStyle={theme.scrollContainer}>

        <SearchInput
          placeholder="Nome do produto"
          search={search}
          setSearch={setSearch}
        />

        {loading ? (
          
          <ActivityIndicator size="large" />

        ) : (
          
          data.map((product) => <ProductCard key={product.id} {...product} />)

        )}

      </ScrollView>

    )

};

export default Movies;

