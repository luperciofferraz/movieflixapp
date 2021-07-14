import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  return (
    
    <NavigationContainer>
        
      <StatusBar 
        barStyle="light-content"
        translucent
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </NavigationContainer>

  );
}

