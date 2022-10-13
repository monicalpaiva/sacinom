import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.rodape}>
        <Text>App para desenvolvimento de dispositivos móveis</Text>
        <Text>UFRN</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  rodape:{
    height:50,
    padding:10,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


