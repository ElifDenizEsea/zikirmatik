import React, { useState,useEffect }  from 'react';
import {View, Text,Pressable, ScrollView} from 'react-native';

import CustomStyle from '../style/customStyle';
import i18n from "../text/general";
import * as asyncRead from "./AsyncRead";

import {useTranslation} from 'react-i18next';
const initI18n = i18n;

let listOfZikr = [];

const MyList =  ({navigation}) => {


  const {t, i18n} = useTranslation();
     asyncRead.read().then((incoming)=>{
      this.listOfZikr=[];
      for(i=0;i<incoming.length;i++){
        this.listOfZikr.push(incoming[i]);

  }}).catch(function(error) {
    console.log( error.message);
    });
    console.log("this.listOfZikr");
console.log(this.listOfZikr);
  return (

  <View style={{ flex: 1}} >

    <View style={{ flex: 1}}></View>
    
    <ScrollView>
    {this.listOfZikr !=undefined?Array.from(this.listOfZikr).map(item=> 
         {if(item != undefined)
          return(
          <View  key={item.name} style={{  flex: 1}}>
           <Pressable style={CustomStyle.listButton}  onPress={() => navigation.navigate('ShowItemFromList', {item})}>
               <Text  style={CustomStyle.buttonLabel}>{item.name}</Text>
            </Pressable>             
            <Text></Text>
          </View>
         );
      }):''}

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