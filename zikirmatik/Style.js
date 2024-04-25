
import {StyleSheet} from 'react-native';

const counterStyle  = StyleSheet.create({
    input: {
      height: 40,
      width:158,
      borderWidth: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {    
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      color: "red",
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    titleText: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      textAlignVertical: "center",
      textAlign: "center"
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

  export counterStyle;