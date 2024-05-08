import React, { useState }  from 'react';
import {View, Text,Vibration,Pressable,} from 'react-native';
import { useRoute } from '@react-navigation/native';
import CustomStyle from '../style/customStyle';
import AddButton from '../counter/AddButton';
import i18n from "../text/general";

import {useTranslation} from 'react-i18next';
const initI18n = i18n;


const MyList = ({navigation},{name}) => {
  const vibrateDevice=()=>{
    Vibration.vibrate(500);
  }

  const {t, i18n} = useTranslation();
  const route = useRoute();
  const zikrItem=route.params?.item;
  const zikrName=zikrItem?.name;
  const zikrHowToRead=zikrItem?.howToRead;
  const zikrNumber=zikrItem?.number;
  const zikrLastCount=zikrItem?.lastCount;

  const [count, setCount] = useState((zikrLastCount>0 && zikrLastCount<zikrNumber)?parseInt(zikrLastCount):0);
  const [number, onChangeNumber] = React.useState(parseInt(zikrNumber));

  return (
    <View style={{alignItems:'center', flex: 1}}>

      <View  style={{alignItems:'center', flex: 1}}></View>

      <View style={CustomStyle.tableViewStyle} >
        <Text  style={CustomStyle.textLabelShow} >   {t('SHOW_FROM_LIST.ZIKR_NAME')} : </Text>
        <Text style={CustomStyle.textValueShow}>{zikrName}</Text>
      </View>

      <View style={CustomStyle.tableViewStyle} >
        <Text  style={CustomStyle.textLabelShow} >   {t('SHOW_FROM_LIST.HOW_TO_READ')} : </Text>
        <Text style={CustomStyle.textValueShow}>{zikrHowToRead}</Text>
      </View>

      <View style={CustomStyle.tableViewStyle} >
        <Text  style={CustomStyle.textLabelShow} >   {t('SHOW_FROM_LIST.ZIKR_COUNT')} : </Text>
        <Text style={CustomStyle.textValueShow}>{zikrNumber}</Text>
      </View>
      
      <View  style={{alignItems:'center', flex: 4}}>
          <AddButton   
            onAddPress = {() => {
              if(count < number) {
                setCount(count+1)
              }
            }
          }
          labelOfButton={count>0?count:""}
          />
        
      </View>
      
      <View style={{alignItems:'center', flex:2}}>
          <Text></Text>
          <Text></Text>
            {count==number && count!=0 && <Text style={CustomStyle.finishedText} >{t('COUNTER.FINISHED')}</Text>}
            {count==number && count!=0 && vibrateDevice()}
      </View>
      
      <View  style={{alignItems:'center', flex: 2}}>
           <Pressable style={CustomStyle.resetButton} 
             onPress={() => {setCount(0);onChangeNumber(parseInt(zikrNumber))}} > 
             <Text style={CustomStyle.buttonLabel}>{t('COUNTER.RESET_BUTTON')}</Text>
             </Pressable>
      </View>
  </View>
  );
   
}
export default MyList;