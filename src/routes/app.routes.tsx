import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/theme';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Details } from '../screens/Details';
import { Catalog } from '../screens/Catalog';
import { Navbar } from '../components/Navbar';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {

    return (

        <Navigator
            
            screenOptions={{
                headerTitle: '',
                headerStyle: { 
                    backgroundColor: theme.colors.amarelo 
                },
                header: () => <Navbar />
            }}
        
        >

            <Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                }}
            />

            <Screen 
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                }}
            />

            <Screen 
                name="Details"
                component={Details}
                options={{
                    title: 'Details',
                }}
            />

            <Screen 
                name="Catalog"
                component={Catalog}
                options={{
                    title: 'Catalog',
                }}
            />

        </Navigator>

    );

}