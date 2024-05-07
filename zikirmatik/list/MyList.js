import React from 'react';
import {View, Text,Pressable, ScrollView} from 'react-native';
import DATA from '../files/list.json';
import CustomStyle from '../style/customStyle';



const MyList = ({navigation}) => {
  return (

  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView>
    {DATA.map(item=> 
    {return(
      <View  key={item.name}>
          <Pressable style={CustomStyle.listButton}  onPress={() => navigation.navigate('ShowItemFromList', {item})}>
          <Text>{item.name}</Text>
          </Pressable>
          <Text></Text>
      </View>
    );
  })}

  </ScrollView>

  <Pressable style={CustomStyle.listButton}  onPress={() => navigation.navigate('AddToList')}>
          <Text>add</Text>
          </Pressable>
  </View>
  );
   
}
export default MyList;