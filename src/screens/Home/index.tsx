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

        <View style={styles.container}>

            <Image source={HomeImg} />

            <View style={styles.textContainer}>
            
                <Text style={styles.title}>Avalie Filmes</Text>

                <Text style={styles.subtitle}>Diga o que você achou do seu {'\n'} filme favorito</Text>
            
            </View>
            
            <ButtonIcon 
                text="FAZER LOGIN"
                activeOpacity={0.8}
                handleOnPress={handleSearchMovies}   
            />
    
        </View>

    );

};