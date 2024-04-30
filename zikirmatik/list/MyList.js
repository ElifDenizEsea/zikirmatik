import React, { useState } from 'react';
import {View, Text,TextInput, ScrollView} from 'react-native';
import DATA from '../files/list.json';



const MyList = () => {
  console.log(DATA);
  return (

  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView>
    {DATA.map(item=> 
    {return(
      <View  key={item.id}>
        <Text >{item.howToRead}</Text>
      </View>
    );
  })}

  </ScrollView>
  </View>
  );
   
}
export default MyList;