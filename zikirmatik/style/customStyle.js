import {StyleSheet} from 'react-native';
const CustomStyle=StyleSheet.create({

finishedText:{
    textAlign: 'center',
    fontSize: 30,
    color: '#000'
},
resetButton: {    
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 19,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#000',
  },
  inputNumber: {
    height: 40,
    width:158,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  countButton:{
    width:200,
    height:200,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#0b9e21',
    borderRadius: 100

  }

});
export default CustomStyle;
