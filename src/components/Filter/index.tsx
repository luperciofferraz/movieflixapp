import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';
import { makePrivateRequest } from '../../services/requests';
import { Genre } from '../../types';

type Props = {
    handleChangeGenre: (genre: Genre) => void; 
}

export function Filter({ handleChangeGenre }: Props) {

    const [selectedGenre, setSelectedGenre] = useState<Genre>();
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect( () => {

        makePrivateRequest({ url: '/genres' })
            
            .then(response => {
                
                setGenres(response.data);
            
            })


    }, []);

    return (

        <Picker
            selectedValue={selectedGenre}
            onValueChange={(itemValue) => {
                setSelectedGenre(itemValue);
                handleChangeGenre(itemValue);
            }
            }>
            
            {
                genres.map( genre => (
                    
                    <Picker.Item key={genre.id} label={genre.name} value={genre} />

                ))
            }   

        </Picker>

    );

}