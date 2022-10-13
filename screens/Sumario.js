import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Rodape from '../templates/rodape';


export default function Sumario() {
    return <View style={styles.conteudo}>
        <View style={styles.poemas}>
        <Text>POEMAS</Text>
        <Text>Na manhã de domingo</Text>
        <Text>Ao Luar da meia noite</Text>
        </View>
        <Rodape />
      </View>
} 
const styles = StyleSheet.create({
  conteudo:{
    flex: 1,
    padding: 5,
    backgroundColor: '#fafad2',
    justifyContent: 'space-between',
  },
  nomeautor:{
    justifyContent: 'center',
    alignContent: 'center',
  },
  poemas:{
    padding: 10,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
