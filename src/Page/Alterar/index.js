import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export default function Alterar({navigation}){
    return(
        <View  style={styles.container}>
            <TextInput style={styles.inputI} placeholder="Alterar"/>
            <TextInput style={styles.inputT} placeholder="Alterar"/>
            <TouchableOpacity style={styles.buttonA} 
            onPress={ () => navigation.navigate('Sobre')}>
                <Text style={styles.buttonText}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} 
            onPress={ () => navigation.navigate('Sobre')}>
                <Text style={styles.buttonText}>Canselar</Text>
            </TouchableOpacity>
        </View>
    );
}

  