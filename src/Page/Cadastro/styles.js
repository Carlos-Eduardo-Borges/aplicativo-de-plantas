import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#569c35',
      elevation: 0.8,
      shadowOpacity: 0,
      paddingBottom: 5,
    },

    inputI:{
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 9,
        height: 200,
        width: 373,
        textAlignVertical: 'top',
        color: '#000',
        position: 'absolute',
    },
    
    inputT:{
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 9,
        height: 126,
        width: 373,
        textAlignVertical: 'top',
        color: '#000',
        position: 'absolute',
        top: 206,
    },
    
    buttonA:{
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        backgroundColor: '#fff',
        marginRight: -15,
        borderRadius: 5,
        height: 40,
        width: 183,
        position: 'absolute',
        marginTop: 5,
        marginBottom: 1,
        left: -5,
        bottom: 25,
    },
    
    buttonB:{
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        backgroundColor: '#fff',
        marginRight: -15,
        borderRadius: 5,
        height: 40,
        width: 183,
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