import React from 'react';
import {View, Text,Pressable, ScrollView} from 'react-native';
import DATA from '../files/list.json';
import CustomStyle from '../style/customStyle';
import i18n from "../text/general";

import {useTranslation} from 'react-i18next';
const initI18n = i18n;


const MyList = ({navigation}) => {
  const {t, i18n} = useTranslation();

  return (

  <View style={{ flex: 1}} >

    <View style={{ flex: 1}}></View>
    
    <ScrollView>
      {DATA.map(item=> 
         {return(
          <View  key={item.name} style={{  flex: 1}}>
           <Pressable style={CustomStyle.listButton}  onPress={() => navigation.navigate('ShowItemFromList', {item})}>
               <Text  style={CustomStyle.buttonLabel}>{item.name}</Text>
            </Pressable>             
            <Text></Text>
          </View>
         );
      })}

    </ScrollView>

    <View style={{ alignItems:'center',flex: 1}}>
          <Pressable style={CustomStyle.addToListButton}  onPress={() => navigation.navigate('AddToList')}>
            <Text  style={CustomStyle.buttonLabel}>{t('MY_LIST.ADD')}</Text>
          </Pressable>
        </View>
  </View>
  );
   
}
export default MyList;