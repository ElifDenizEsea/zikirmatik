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
const handleNumberChange = (text) => { 
  // Allow only numbers 
  const numericValue = text.replace(/[^0-9]/g, ""); 
  onChangeZikrNumber(numericValue); 
}; 
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
    }catch(e){

    }
    jsonArray.push(newZikr);
    await FileSystem.writeAsStringAsync(filename, JSON.stringify(jsonArray), { encoding: FileSystem.EncodingType.UTF8 });
    navigation.navigate('MyList')

  };

  const {t, i18n} = useTranslation();
  return (

    <View style={{alignItems:'center', flex: 1}}>

<View  style={{alignItems:'center', flex: 1}}></View>
<View  style={{alignItems:'center', flex: 1}}></View>
<View  style={{alignItems:'center', flex: 1}}></View>
<View style={CustomStyle.tableViewStyle} >
    <Text  style={CustomStyle.textLabelShow} >{t('ADD_TO_LIST.ZIKR_NAME')} </Text>

<View  style={{alignItems:'center', flex: 1}}></View>
    <TextInput               onChangeText={onChangeZikrName}
 style={CustomStyle.inputNumber} />
</View>

<View style={CustomStyle.tableViewStyle} >
    <Text  style={CustomStyle.textLabelShow} >{t('ADD_TO_LIST.HOW_TO_READ')}</Text>

<View  style={{alignItems:'center', flex: 1}}></View>
    <TextInput                onChangeText={onChangeZikrRead}
 style={CustomStyle.inputNumber}   />
</View>

<View style={CustomStyle.tableViewStyle} >
    <Text  style={CustomStyle.textLabelShow} >{t('ADD_TO_LIST.INPUT_ZIKR')}</Text>

<View  style={{alignItems:'center', flex: 1}}></View>
    <TextInput   
       style={CustomStyle.inputNumber}     
      
       value={zikrNumber}      
      onChangeText={handleNumberChange}
       keyboardType="numeric"  />

</View>

    <Pressable style={CustomStyle.saveButton}  onPress={saveFile}>
      <Text style={CustomStyle.buttonLabel}>{t('ADD_TO_LIST.SAVE')}</Text>
    </Pressable>

<View  style={{alignItems:'center', flex: 1}}></View>
<View  style={{alignItems:'center', flex: 1}}></View>
<View  style={{alignItems:'center', flex: 1}}></View>
<View style={{flex: 1,}}>
        <Pressable  style={CustomStyle.backButton} onPress={() => navigation.navigate('MyList')}>
          <Text style={CustomStyle.buttonLabel}>{t('BACK')}</Text>
          </Pressable>
          </View>
   </View>
  );
   
}
export default AddToList;