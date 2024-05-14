import { Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomStyle from '../style/customStyle';
import i18n from "../text/general";

import {useTranslation} from 'react-i18next';
const initI18n = i18n;
const CountButton = ({onAddPress,labelOfButton}) => {
  const {t, i18n} = useTranslation();

  const ss= t('COUNTER.START');
  
  return (
    <TouchableOpacity style={CustomStyle.countButton} onPress={onAddPress}> 
    <Text style={CustomStyle.countText} >{labelOfButton!=""?labelOfButton:ss}</Text>
    
    </TouchableOpacity>
  );
};

export default CountButton;
