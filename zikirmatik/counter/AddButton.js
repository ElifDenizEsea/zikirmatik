import { Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomStyle from '../style/customStyle';

const AddButton = ({onAddPress,labelOfButton}) => {
  return (
    <TouchableOpacity style={CustomStyle.countButton} onPress={onAddPress}> 
    <Text style={CustomStyle.countText} >{labelOfButton}</Text>
    
    </TouchableOpacity>
  );
};

export default AddButton;
