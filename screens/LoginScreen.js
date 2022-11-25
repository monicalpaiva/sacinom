import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function logar(){
    const json = {
      user,
      password,
    };

    const headerOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    };
    const response = await fetch('https://mobile.ect.ufrn.br:3000/login', headerOptions);
    if(response.status === 200){
      const token = await response.text();
      await AsyncStorage.setItem('token',token);
      console.long('TOKEN: ' + token);
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert(
        'Erro',
        'Usuário ou senha invállido',
      );
    }
  }


  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.loginContent}>
            <TextInput 
                style={styles.InputContent} 
                placeholder="Usuário..."
                value={user} 
                onChangeText={setUser}/>
            <TextInput 
                style={styles.InputContent} 
                placeholder="Senha..." 
                value={password}
                onChangeText={setPassword}
                secureTextEntry = {true}/>
        </View>
        <View style={styles.botoesLogCad}>
            <TouchableOpacity 
            style={styles.sendButton}
            onPress={() => logar()}>
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
