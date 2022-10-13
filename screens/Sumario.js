import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

export default function Sumario() {
    return <View style={styles.conteudo}>
        <View style={styles.poemas}>
        <Text>POEMAS</Text>
        <Text>Na manhã de domingo</Text>
        <Text>Ao Luar da meia noite</Text>
        </View>
      </View>
} 
const styles = StyleSheet.create({
  conteudo:{
    flex: 1,
    padding: 5,
    backgroundColor: '#fafad2',
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
