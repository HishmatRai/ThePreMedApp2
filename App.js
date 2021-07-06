  
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import { NativeBaseProvider } from 'native-base';
export default function App(props) {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});