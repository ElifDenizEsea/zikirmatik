import React, { useState } from 'react';
import {View, Text,Pressable, TextInput} from 'react-native';
import AddButton from './AddButton';
import CustomStyle from '../style/customStyle';
const Counter = () => {
    const [count, setCount] = useState(0);
    const [number, onChangeNumber] = React.useState('');
   return (
    <View style={{alignItems:'center'}}>
        <View >
            <TextInput style={CustomStyle.inputNumber}
        onChangeText={onChangeNumber}
              value={number}
              placeholder="Zikir sayisi giriniz"
              keyboardType="numeric" />
        
        </View>
        <Text> </Text>
        <View >
          <AddButton   
          onAddPress = {() => {
            setCount(0);
            if(count < number) {
              setCount(count+1)
            }}
        }

        labelOfButton={count}
          />
        
        </View>
        
        <View>
           <Text style={CustomStyle.finishedText} >{count>0?count:""} </Text>
    {count==number && count!=0 && <Text style={CustomStyle.finishedText} >Tamamlandi</Text>}
    </View>
        <Text> </Text>
        <View >
           <Pressable style={CustomStyle.resetButton} 
             onPress={() => {setCount(0);onChangeNumber("")}} > 
             <Text style={CustomStyle.buttonLabel}>Sifirla</Text>
             </Pressable>
          
        </View>
         </View>

   );
}
export default Counter;