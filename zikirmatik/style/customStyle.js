import {StyleSheet} from 'react-native';
const CustomStyle=StyleSheet.create({

finishedText:{
    textAlign: 'center',
    fontSize: 30,
    color: '#000'
},
countText:{
    textAlign: 'center',
    fontSize: 40,
    color: '#fff'
},
resetButton: {    
    height: 40,
    width:70,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: '#ccc',
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
