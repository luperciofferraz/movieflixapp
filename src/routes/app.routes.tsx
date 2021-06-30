import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Details } from '../screens/Details';
import { Catalog } from '../screens/Catalog';
import { Header } from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {

    return (

        <Navigator
        
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.amarelo
                },
                header: () => <Header />
            }}
        
        >

            <Screen 
                name="Home"
                component={Home}
            />

            <Screen 
                name="Login"
                component={Login}
            />

            <Screen 
                name="Details"
                component={Details}
            />

            <Screen 
                name="Catalog"
                component={Catalog}
            />

        </Navigator>

    );

}