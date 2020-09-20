import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './config/StatusBarConfig';

import Home from './Page/Home';
import Sobre from './Page/Sobre';
import Plantas from './Page/Plantas';
import Lista from './Page/Lista';
import Cadastro from './Page/Cadastro';
import Alterar from './Page/Alterar';

const Stack = createStackNavigator();

export default function App() {
  Static = navigationOpitions = {
    title: 'Plantas'
}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
        options={{headerStyle:{backgroundColor:'#569c35'}}} />
        
        <Stack.Screen name="Plantas" component={Plantas} 
        options={{headerStyle:{backgroundColor:'#569c35'}}}/>
        
        <Stack.Screen name="Sobre" component={Sobre} 
        options={{headerStyle:{backgroundColor:'#569c35'}}}/>
        
        <Stack.Screen name="Lista" component={Lista} 
        options={{headerStyle:{backgroundColor:'#569c35'}}}/>
        
        <Stack.Screen name="Cadastro" component={Cadastro} 
        options={{headerStyle:{backgroundColor:'#569c35'}}}/>
        
        <Stack.Screen name="Alterar" component={Alterar} 
        options={{headerStyle:{backgroundColor:'#569c35'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
