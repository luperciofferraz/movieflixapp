import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';

export function Navbar() {

    return (

        <View style={styles.container}>
            
            <View style={styles.textContainer}>
                <Text style={styles.textTitulo}>MovieFlix</Text>
                <Text style={styles.textSair}>SAIR</Text>
            </View>

        </View>

    );

}