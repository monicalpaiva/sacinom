import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, TouchableOpacity, StyleSheet, FlatList, View, Text, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { useEffect } from 'react';

import { db, collection, getDocs, addDoc  } from './firebase';

import uuid from 'react-native-uuid';

export default function EscritaScreen() {
  const [text, setText] = React.useState('');
  const [poeminhas, setpoeminhas] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState(false);

  useEffect(() => {
    async function getpoeminhas(db) {
      const poeminhasCol = collection(db, 'poeminhas');
      const citySnapshot = await getDocs(poeminhasCol);
      const poeminhas = citySnapshot.docs.map(doc => doc.data());
      setpoeminhas(poeminhas);
    }
    getpoeminhas(db);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  const saveItem = async () => {
    setShowLoader(true);
    if(text) {
      try {
        const city = {
          id: uuid.v4(),
          name: text,
        };
        const docRef = await addDoc(collection(db, "poeminhas"), city);
        setText('');
        setpoeminhas(poeminhas.concat([city]));

        console.log("Document written with ID: ", docRef.id);
      } catch(e) {
        console.error("Error adding document: ", e);
      }
    }
    setShowLoader(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputcontainer}>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <TouchableOpacity
          style={styles.button}
          onPress={saveItem}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputcontainer: {
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
