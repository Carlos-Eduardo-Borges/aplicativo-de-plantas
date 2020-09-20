import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export default function Plantas({navigation}){
    return(
        <View  style={styles.container}>          
            <TextInput style={styles.input} placeholder="Palntas"/>
            <TouchableOpacity style={styles.buttonB} onPress={ () => navigation.navigate('Sobre')}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonL} onPress={ () => navigation.navigate('Lista')}>
                <Text style={styles.buttonText}>Lista</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonC} onPress={ () => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}
