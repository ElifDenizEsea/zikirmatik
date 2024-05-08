import React, { useState } from 'react';
import {Vibration, View, Text,Pressable, TextInput} from 'react-native';
import AddButton from './AddButton';
import CustomStyle from '../style/customStyle';
import i18n from "../text/general";

import {useTranslation} from 'react-i18next';
const initI18n = i18n;

const Counter = ({navigation}) => {

  const vibrateDevice=()=>{
    Vibration.vibrate(500);
  }

  const {t, i18n} = useTranslation();
    const [count, setCount] = useState(0);
    const [number, onChangeNumber] = React.useState('');
   return (
    <View style={{alignItems:'center', flex: 7,}}>
    <View style={{alignItems:'center', flex: 1}}>
      </View>
        <View style={{ flex: 1}}>
            <TextInput 
              style={CustomStyle.inputNumber}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={
                t('COUNTER.INPUT_ZIKR')}
              keyboardType="numeric" 
            />
        
        </View>
        <View  style={{ flex: 1,}}>
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
        
        <View style={{flex: 1,}}>
          <Text></Text>
          <Text></Text>
        <Text> </Text>
            {count==number && count!=0 && <Text style={CustomStyle.finishedText} >{t('COUNTER.FINISHED')}</Text>}
            {count==number && count!=0 && vibrateDevice()}
        </View>
    
        <View  style={{ flex: 1,}}>
           <Pressable style={CustomStyle.resetButton} 
             onPress={() => {setCount(0);onChangeNumber("")}} > 
             <Text style={CustomStyle.buttonLabel}>{t('COUNTER.RESET_BUTTON')}</Text>
             </Pressable>
        </View>
        <View style={{flex: 1,}}>
        <Pressable  style={CustomStyle.myListButton} onPress={() => navigation.navigate('MyList')}>
          <Text style={CustomStyle.buttonLabel}>{t('COUNTER.MY_LIST')}</Text>
          </Pressable>
          </View>
        </View>

   );
}
export default Counter;