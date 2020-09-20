import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#569c35',
      elevation: 0.8,
      shadowOpacity: 0,
    },
    input:{
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 9,
        height: 40,
        width: 373,
        textAlignVertical: 'top',
        color: '#000',
        position: 'absolute',
        bottom: 74,
    },
    button:{
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        backgroundColor: '#fff',
        marginRight: -15,
        borderRadius: 5,
        height: 40,
        width: 373,
        position: 'absolute',
        marginTop: 5,
        marginBottom: 1,
        right: 25,
        bottom: 25,
    },
    buttonText:{
        color: '#121212',
        fontSize: 22,
      },
  });
  
  export default styles;