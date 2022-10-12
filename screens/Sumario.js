import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Sumario() {
  return (
    <View style={styles.conteudo}>
      <View  style={styles.conteudoCentral}>
        <Text> Nome do autor</Text>
        <Text> Imagem do autor</Text>
      </View>
      <View style={styles.conteudoSobre}>
        <Text>Descrição do autor</Text>
        <Text>Links com os títulos para as produções do autor</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteudo:{
    flex: 1,
    height:100,
    padding:5,
    backgroundColor: '#fafad2',
  },
  conteudoCentral:{
    alignItems: 'center',
  },
  conteudoSobre:{
    height:100,
    padding:5,
    alignItems: 'flex-start',
  }
});
