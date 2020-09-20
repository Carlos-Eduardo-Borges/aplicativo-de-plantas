import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import Logo from '../../assets/Logo.png';

export default function Home({navigation}){
    return(
        <View  style={styles.container}>
            <Image source={Logo}  style={styles.Logo}/>
            <Text style={styles.title}>Plantas</Text>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Plantas')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <StatusBar barStyle="light-content" />
        </View>
    );
}

