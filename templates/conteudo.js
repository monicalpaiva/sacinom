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
      <View style={styles.conjunto}>
        <TouchableOpacity style={styles.NomeImagem} onPress={() => navigation.navigate('Sumario')} >
          <Image source={{uri: item.src}} style={styles.imagem}/>
          <Text>{item.nome}</Text>
        </TouchableOpacity>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
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
  conjunto:{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem:{
    height: '80%',
    width: 100,
  },
  descricao:{
    textAlign: 'justify',  
    padding: 5,
    width: '75%',
  },
  NomeImagem:{
    backgroundColor: '#6495ed' , 
    alignItems: 'center',
  }
});