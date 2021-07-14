import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

export function Navbar() {

    const  { isAuthenticated, signOut } = useAuth();

    const [authenticated, setAuthenticated] = useState(true);

    const navigation = useNavigation();

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function handleLogout() {
        signOut();
        navigation.navigate('Home');
    }

    useEffect(() => {
        
        logged();

    }, []);
    
    return (

        <View style={styles.container}>
            
            <View style={styles.textContainer}>
                
                <Text style={styles.textTitulo}>MovieFlix</Text>

                { authenticated ? 

                    <TouchableOpacity 
                        
                        onPress={handleLogout}
                    >  
                        <Text 
                            style={styles.textSair}>
                                SAIR
                        </Text>

                    </TouchableOpacity>

                    :                     
                    
                    <></>
                }

            </View>

        </View>

    );

}