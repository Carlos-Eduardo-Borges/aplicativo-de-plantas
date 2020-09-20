import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#569c35',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0.8,
        shadowOpacity: 0,
        
    },
    title:{
        color: '#121212',
        fontSize: 25,
        textAlign: "center",
        paddingTop: 25,
    },
    button:{
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height: 40,
        width: 373,
        position: 'absolute',
        marginTop: 5,
        marginBottom: 1,
        bottom: 25,
    },
    buttonText:{
        color: '#121212',
        fontSize: 22,
      },
    Logo:{
        width: 100,
        height: 100,
        borderRadius: 5,
    }
  });
  
  export default styles;