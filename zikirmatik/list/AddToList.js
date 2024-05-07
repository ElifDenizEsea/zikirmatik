import React  from 'react';
import {View, Text,TextInput,Pressable} from 'react-native';
import CustomStyle from '../style/customStyle';
import {useTranslation} from 'react-i18next';
import i18n from "../text/general";
import DATA from '../files/list.json';


const initI18n = i18n;

const save=()=>{
  
}


const AddToList = ({navigation}) => {

  const {t, i18n} = useTranslation();
  return (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <Text  style={CustomStyle.resetButton} >{t('ADD_TO_LIST.ZIKR_NAME')} </Text>
    <TextInput  style={CustomStyle.inputNumber} />

    <Text  style={CustomStyle.resetButton} >{t('ADD_TO_LIST.HOW_TO_READ')}</Text>
    <TextInput   style={CustomStyle.inputNumber}   />

    <Text  style={CustomStyle.resetButton} >{t('ADD_TO_LIST.INPUT_ZIKR')}</Text>
    <TextInput  style={CustomStyle.inputNumber}  keyboardType="numeric"  />
    <Pressable style={CustomStyle.listButton}  onPress={save}>
      <Text>save</Text>
    </Pressable>
  </View>
   
  );
   
}
export default AddToList;