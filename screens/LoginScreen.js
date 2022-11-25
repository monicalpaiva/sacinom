import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.loginContent}>
            <TextInput 
                style={styles.InputContent} 
                placeholder="Usuário..."/>
            <TextInput 
                style={styles.InputContent} 
                placeholder="Senha..." 
                secureTextEntry = {true}/>
        </View>
        <View style={styles.botoesLogCad}>
            <TouchableOpacity 
            style={styles.sendButton}>
            <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton}>
            <Text>Cadastro</Text>
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
