import React, { useState,useEffect }  from 'react';
import {View, Text,Pressable, ScrollView} from 'react-native';

import CustomStyle from '../style/customStyle';
import i18n from "../text/general";
import * as FileSystem from "expo-file-system"

import {useTranslation} from 'react-i18next';
const initI18n = i18n;
async function read(){
  let filename = FileSystem.documentDirectory+"myZikrList.json";

  var jsonArray = [];
  try{
  const existing=await FileSystem.readAsStringAsync(filename);
  jsonArray=JSON.parse(existing);
  console.log(jsonArray);
  }catch(e){
    console.log(e);

  }
  return Array.from(jsonArray); ;
}

const MyList =  ({navigation}) => {

  const {t, i18n} = useTranslation();

 let data=[];
  const dataFunc = async () => {
    console.log("data func");
    data= await read();
    console.log(data);
  }
  console.log(data);
  return (

  <View style={{ flex: 1}} >

    <View style={{ flex: 1}}></View>
    
    <ScrollView>
      {Array.from(data).map(item=> 
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