import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

export default function conteudo({navigation}) {
  const [autores, setAutores] = useState([]);

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://raw.githubusercontent.com/monicalpaiva/sacinomapi/main/autores.json');
      const autoresServidor = await response.json();
      //console.log(autores);
      setAutores(autoresServidor)
    }
    getData();
  }, [])

function renderItem({item}){
    return <View style={styles.conteudo}>
         <TouchableOpacity style={styles.NomeImagem} onPress={() => navigation.navigate('Sumario')} >
            <Image source={item.src} style={styles.imagem}/>
            <Text>{item.nome}</Text>
          </TouchableOpacity>
            <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
}

  return (
    <View style={styles.conteudo}>
        <FlatList
            data={autores}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
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
  imagem:{
    height: 50,
    width: 50,
  },
  descricao:{
    textAlign: 'justify',  
    letterSpacing: 3,
    padding: 5,
  },
  NomeImagem:{
    flexDirection:'row',
    alignContent:'space-between',
    justifyContent: 'space-between',
    backgroundColor: '#f0e68c' ,  
    padding:10, 
  }
});


