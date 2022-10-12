import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Header from '../templates/header';
import Navegacao from '../templates/navegacao';
import Conteudo from '../templates/conteudo';
import Rodape from '../templates/rodape';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header navigation={navigation}/>
      <Navegacao />
      <Conteudo navigation={navigation}/>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    marginTop: Constants.statusBarHeight,
  }
});

