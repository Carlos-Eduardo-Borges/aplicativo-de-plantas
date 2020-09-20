import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export default function Cadastro({navigation}){

    return(
        <View  style={styles.container}>
            <TextInput style={styles.inputI} placeholder="Cadastro"/>
            <TextInput style={styles.inputT} placeholder="Cadastro"/>
            <TouchableOpacity style={styles.buttonA} onPress={ () => navigation.navigate('Alterar')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} onPress={ () => navigation.navigate('Alterar')}>
                <Text style={styles.buttonText}>Canselar</Text>
            </TouchableOpacity>
        </View>
    );
}

  