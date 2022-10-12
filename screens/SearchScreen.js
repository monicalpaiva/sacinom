import React from "react";
import { View, Text,StyleSheet } from "react-native";

import Pesquisa from '../templates/pesquisa';

export default function SearchScreen(){
    return(
        <View style={styles.container}>
            <Text>Aqui vai ser a parte de pesquisa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    }
  });
  