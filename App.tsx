import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/global/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.cinzaEscuro,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
