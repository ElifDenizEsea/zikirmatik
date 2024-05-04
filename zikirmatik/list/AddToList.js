import React  from 'react';
import {View, Text,TextInput,Pressable} from 'react-native';
import CustomStyle from '../style/customStyle';
import {useTranslation} from 'react-i18next';
import i18n from "../text/general";
import  RNFS from 'react-native-fs';


const initI18n = i18n;

const save=()=>{

  let data = RNFS.readFileSync('../files/list.json');
  let list = JSON.parse(data);
  let newZikr={
    
      name:"",
      howToRead:"",
      number:10,
      lastCount:0
  };
  console.log('elif');
  console.log(newZikr);
  list.push( newZikr);
  console.log(list);
  RNFS.writeFile('../files/list.json', JSON.stringify(list), function(err) {
    if (err) {
      console.log(err);
    }
  });
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