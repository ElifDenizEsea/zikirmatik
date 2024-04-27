import React, { useState } from 'react';
import {Vibration, View, Text,Pressable, TextInput} from 'react-native';
import AddButton from './AddButton';
import CustomStyle from '../style/customStyle';
import i18n from "../text/general";

import {useTranslation} from 'react-i18next';
const initI18n = i18n;

const Counter = () => {

  const vibrateDevice=()=>{
    Vibration.vibrate(1000);
  }

  const {t, i18n} = useTranslation();
    const [count, setCount] = useState(0);
    const [number, onChangeNumber] = React.useState('');
   return (
    <View style={{alignItems:'center'}}>
        <View >
            <TextInput 
              style={CustomStyle.inputNumber}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={
                t('COUNTER.INPUT_ZIKR')}
              keyboardType="numeric" 
            />
        
        </View>
        <Text> </Text>
        <View >
          <AddButton   
            onAddPress = {() => {
              if(count != number){
                setCount(0);
              }
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
             onPress={() => {setCount(0);onChangeNumber("")}} > 
             <Text style={CustomStyle.buttonLabel}>{t('COUNTER.RESET_BUTTON')}</Text>
             </Pressable>
        </View>
    </View>

   );
}
export default Counter;