import React from "react";
import { View, Text,StyleSheet } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import Rodape from '../templates/rodape';


export default function SearchScreen(){
    return <View style={styles.conteudo}>
        <View style={styles.conjuntoPesquisa}>
    <Text>Pesquisa por autor</Text>
    <FontAwesome5 name="search" size={24} color="black"/>
    </View>
    <Rodape />
  </View>
} 
const styles = StyleSheet.create({
conteudo:{
    flex:1,
    backgroundColor: '#90ee90',
    justifyContent: 'space-between',
},
conjuntoPesquisa:{
    flexDirection: 'row',
    alignItems: 'center',
}
});
