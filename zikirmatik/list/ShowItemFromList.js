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
    Vibration.vibrate(1000);
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
  <View >

<View >
        <Text style={CustomStyle.finishedText}>{zikrName}</Text>
        <Text style={CustomStyle.finishedText}>{zikrHowToRead}</Text>
        </View>
        <View >
          <AddButton   
            onAddPress = {() => {
          console.log(count);
          console.log(number);
              if(count < number) {
                setCount(count+1)
              }
            }
          }
          labelOfButton={count>0?count:""}
          />
        
        </View>
        <View>
          <Text></Text>
          <Text></Text>
            {count==number && count!=0 && <Text style={CustomStyle.finishedText} >{t('COUNTER.FINISHED')}</Text>}
            {count==number && count!=0 && vibrateDevice()}
        </View>
        <View >
           <Pressable style={CustomStyle.resetButton} 
             onPress={() => {setCount(0);onChangeNumber(parseInt(zikrNumber))}} > 
             <Text style={CustomStyle.buttonLabel}>{t('COUNTER.RESET_BUTTON')}</Text>
             </Pressable>
        </View>
  </View>
  );
   
}
export default MyList;