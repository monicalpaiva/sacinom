import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function header({navigation}){
  return (
      <View style={styles.header}>
       <Image source={require('../assets/imagens/logo_sacinom.png')} style={styles.imagem}/>
       <FontAwesome5 name="search" size={24} color="white" onPress={() => navigation.navigate('SearchScreen')}/>
      </View>
  );
}

const styles = StyleSheet.create({
header:{
    flexDirection: 'row',
    height: 50,
    padding:10,
    backgroundColor: '#eb653e',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
icones:{
  flexDirection: "row",
},
imagem:{
  height: 50,
  width: 120,
}
});


