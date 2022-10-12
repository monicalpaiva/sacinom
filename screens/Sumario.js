import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Sumario() {
  return (
    <View style={styles.conteudoCentral}>
     <Text> Sumario</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conteudoCentral:{
    flex: 1,
    height:100,
    padding:5,
    backgroundColor: '#fafad2',
    alignItems: 'center',
  }
});
