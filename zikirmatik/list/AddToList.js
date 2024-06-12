import React, { useState } from 'react';
import {View, Text,TextInput,Pressable} from 'react-native';
import CustomStyle from '../style/customStyle';
import {useTranslation} from 'react-i18next';
import i18n from "../text/general";
import * as FileSystem from "expo-file-system"

const initI18n = i18n;


const AddToList = ({navigation}) => {

const [zikrName, onChangeZikrName] = React.useState('');
const [zikrRead, onChangeZikrRead] = React.useState('');
const [zikrNumber, onChangeZikrNumber] = React.useState('');

  const saveFile = async () => {
    const newZikr={
      name:zikrName,
      howToRead:zikrRead,
      number:zikrNumber,
      lastCount:0
    };


    let filename = FileSystem.documentDirectory+"myZikrList97.json";
    var jsonArray = [];
    try{
    const existing=await FileSystem.readAsStringAsync(filename);
    jsonArray=JSON.parse(existing);
    console.log(existing);
    }catch(e){

    }
    jsonArray.push(newZikr);
    await FileSystem.writeAsStringAsync(filename, JSON.stringify(jsonArray), { encoding: FileSystem.EncodingType.UTF8 });
    navigation.navigate('Counter')

  };
  const aa=FileSystem.readAsStringAsync(FileSystem.documentDirectory+"text.txt");

  const {t, i18n} = useTranslation();
  return (
  <View style={{ flex: 1,}}>
    <Text  style={CustomStyle.resetButton} >{t('ADD_TO_LIST.ZIKR_NAME')} </Text>
    <TextInput               onChangeText={onChangeZikrName}
 style={CustomStyle.inputNumber} />

    <Text  style={CustomStyle.resetButton} >{t('ADD_TO_LIST.HOW_TO_READ')}</Text>
    <TextInput                onChangeText={onChangeZikrRead}
 style={CustomStyle.inputNumber}   />

    <Text  style={CustomStyle.resetButton} >{t('ADD_TO_LIST.INPUT_ZIKR')}</Text>
    <TextInput               onChangeText={onChangeZikrNumber}
  style={CustomStyle.inputNumber}  keyboardType="numeric"  />
    <Pressable style={CustomStyle.listButton}  onPress={saveFile}>
      <Text>{t('ADD_TO_LIST.SAVE')}</Text>
    </Pressable>
  </View>
   
  );
   
}
export default AddToList;