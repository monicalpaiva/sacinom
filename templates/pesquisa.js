import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function pesquisa() {
return (
    <View style={styles.conteudo}>
        <Text style={styles.corpo}>Pesquisas</Text>
        <FontAwesome5 name="search" size={24} color="white"/>
    </View>
  );
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#fafad2',
        alignContent:'space-between',
        justifyContent: 'space-between',
    },
    corpo:{
        height:100,
        padding:5,
        backgroundColor: '#fafad2',
        alignContent: 'center',
        justifyContent: 'center',
    },
});
