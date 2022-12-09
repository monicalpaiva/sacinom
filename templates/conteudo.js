import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function conteudo({navigation}) {

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.botoesLogCad}>
            <TouchableOpacity 
              style={styles.sendButton}
              onPress={() => navigation.navigate("LeituraScreen")}>
              <Text>LER</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.sendButton}
              onPress={() => navigation.navigate('EscritaScreen')}>
              <Text>ESCREVER</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    justifyContent: 'center',
  },
  loginContent:{
    justifyContent: 'center',
    margin: 20,
    padding:40, 
    borderColor: '#fffaf0',
    borderWidth: 1,
    backgroundColor: '#fffaf0',
    borderRadius: 10,
  },
  InputContent:{
    height: 40,
    marginTop:20,
    borderWidth: 1,
    borderColor: 'none',
    borderRadius: 10,
    //backgroundColor: '#fff8dc',
    paddingLeft: 10,
  },
  sendButton:{
    padding:10,
    with: 120,
    backgroundColor: '#00ced1',
    alingItens: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
    alignTop: 20,
    alignSelf: 'center',
  },
  botoesLogCad:{
    flexDirection: "row",
    alingItens: 'center',
    justifyContent: 'center',
  }
});