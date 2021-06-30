import React from 'react';
import { View, Text, Image } from 'react-native';
import HomeImg from '../../assets/homeImg.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';

export function Home() {

    function handleSearchMovies() {
    }
    
    return (

        <View>

            <View>
            
                <Image source={HomeImg} />

                <View>
                
                    <Text>Avalie Filmes</Text>

                    <Text>Diga o que você achou do seu {'\n'} filme favorito</Text>
                
                </View>
                
                <ButtonIcon 
                    text="INICIE AGORA A SUA BUSCA"
                    handleOnPress={handleSearchMovies}   
                />

            </View>
    
        </View>

    );

};