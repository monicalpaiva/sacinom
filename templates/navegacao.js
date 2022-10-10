import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function conteudo() {
  return (
    <View style={styles.navegacao}>
        <Text style={styles.titulo}>Autores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navegacao:{
    flexDirection: "row",
    height:50,
    padding:10,
    backgroundColor: '#00ff00', 
    alignContent: 'center',
    justifyContent: 'center',
  }
});


