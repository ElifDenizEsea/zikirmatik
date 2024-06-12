import React, { useState,useEffect }  from 'react';
import {View, Text,Pressable, ScrollView} from 'react-native';

import CustomStyle from '../style/customStyle';
import i18n from "../text/general";
import * as asyncRead from "./AsyncRead";

import {useTranslation} from 'react-i18next';
const initI18n = i18n;

let data=[];

const MyList =  ({navigation}) => {

  const {t, i18n} = useTranslation();

     asyncRead.read().then((incoming)=>{
      for(i=0;i<incoming.length;i++){
        this.data[i]=incoming[i];
        console.log(this.data);
    }

  });

  console.log(this.data);
  return (

  <View style={{ flex: 1}} >

    <View style={{ flex: 1}}></View>
    
    <ScrollView>
      {Array.from(this.data).map(item=> 
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