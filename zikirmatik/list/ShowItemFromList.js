import React  from 'react';
import {View, Text,} from 'react-native';



const MyList = ({navigation},{name}) => {
  console.log(name);
  return (
  <View style={{ flex: 1, backgroundColor: 'white' }}>

        
        <Text >{name}</Text>
   
  </View>
  );
   
}
export default MyList;