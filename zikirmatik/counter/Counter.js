import React, { useState } from 'react';
import {StyleSheet, View, Text,Pressable, TextInput} from 'react-native';
import AddButton from './AddButton';
const Counter = () => {
    const [count, setCount] = useState(0);
    const [number, onChangeNumber] = React.useState('');
   return (
    <View>
        <View >
            <TextInput style={styles.input}
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
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View>
           <Text style={styles.titleText} >{count>0?count:""} </Text>
    {count==number && count!=0 && <Text style={styles.titleText} >Tamamlandi</Text>}
    </View>
        <Text> </Text>
        <View >
           <Pressable style={styles.button} 
             onPress={() => {setCount(0);onChangeNumber("")}} > 
             <Text style={styles.text}>Sifirla</Text>
             </Pressable>
          
        </View>
         </View>

   );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width:158,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {    
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    color: "red",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  titleText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: "center",
    textAlign: "center"
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Counter;