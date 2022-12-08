import React from "react";

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import Sumario from "./screens/Sumario";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{title: 'PESQUISA'}}/>
        <Stack.Screen name="Sumario" component={Sumario} options={{title: 'SUMARIO'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}