import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

export default function conteudo() {
const autores = [
    {
        id: 1,
        nome: 'Monica',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh.Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/monica.jpg'),
    },
    {
        id: 2,
        nome: 'Cebolinha',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/cebolinha.jpg'),
    },
    {
        id: 3,
        nome: 'Franginha',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/franginha.jpg'),
    },
    {
        id: 4,
        nome: 'Chico Bento',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/chicobento.jpg'),
    },
    {
        id: 5,
        nome: 'Magali',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/magali.jpg'),
    },
    {
        id: 6,
        nome: 'Bidu',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/bidu.jpg'),
    }
];

function renderItem({item}){
    return <View style={styles.conteudo}>
        <View style={styles.NomeImagem}>
            <Image source={item.src} style={styles.imagem}/>
            <Text>{item.nome}</Text>
        </View>
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


