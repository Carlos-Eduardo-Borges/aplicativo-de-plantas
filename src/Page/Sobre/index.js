import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export default function Sobre({navigation}){
    return(
        <View  style={styles.container}>
            <TextInput style={styles.inputI} placeholder="Sobre"/>
            <TouchableOpacity style={styles.buttonA} onPress={ () => navigation.navigate('Alterar')}>
                <Text style={styles.buttonText}> Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonR} onPress={ () => navigation.navigate('Alterar')}>
                <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
        </View>
    );
}

  