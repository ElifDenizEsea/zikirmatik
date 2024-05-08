import {StyleSheet} from 'react-native';
const CustomStyle=StyleSheet.create({

finishedText:{
    textAlign: 'center',
    fontSize: 30,
    color: '#fff'
},
countText:{
    textAlign: 'center',
    fontSize: 40,
    color: '#fff'
},
addToListLabel:{
  textAlign: 'center',
  fontSize: 40
},
resetButton: {    
    height: 40,
    width:70,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: '#FFE5CC',
  },
  myListButton: {    
    height: 40,
    width:80,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: '#FFE5CC',
  },
  addToListButton: {    
    height: 40,
    width:60,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: '#FFE5CC',
  },
  textLabelShow: {    
    fontSize: 20,
    borderRadius: 2,
    color: '#fff',
  },
  textValueShow: {    
    fontSize: 20,
    borderRadius: 2,
    color: '#fff',
  },
 customListButton: {    
    height: 40,
    width:80,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: '#FFE5CC',
  },
  listButton: { 
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: '#FFE5CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputNumber: {
    height: 40,
    width:158,
    color: '#994C00',
    backgroundColor: '#FFE5CC',
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
    color: '#994C00',
  },
  countButton:{
    width:200,
    height:200,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#994C00',
    borderRadius: 100

  },
  container: {
    flex: 1,

  },
  imageWallpaper: {
    flex: 1,
    justifyContent: 'center',
  },
tableViewStyle:{
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: "row",
    justifyContent: "left",
    alignItems:"left",
    flexWrap: "wrap",
    textAlign: "justify"
}

});
export default CustomStyle;
