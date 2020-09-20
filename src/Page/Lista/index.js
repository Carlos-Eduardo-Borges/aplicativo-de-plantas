import React,{Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export default function Lista({navigation}){
    return(
        <View  style={styles.container}>
            <FlatList 
            data={this.state.docs}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}/>

             <TextInput style={styles.input} placeholder="Palntas"/>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Sobre')}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    );
}
