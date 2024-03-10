import React, { useState } from 'react';
import {StyleSheet, View, Text, Button,Pressable, TextInput} from 'react-native';
import AddButton from './AddButton';
//import xyz from './Counter.module.css';
const Counter = () => {
    const [count, setCount] = useState(0);
    const [number, onChangeNumber] = React.useState('');
   return (
    <View>
        <View>
            <TextInput style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Zikir sayisi giriniz"
        keyboardType="numeric" />
             <Pressable style={styles.button} 
              onPress={() => {setCount(0)}} >
                <Text style={styles.text}>Baslat</Text>
             </Pressable>
        </View>
        <Text> </Text>
        <View >
          <AddButton   onAddPress={() => {setCount(count + 1)} } 
          title= "elif " />
        </View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View >
           <Text> {count} </Text>
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
    width:140,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Counter;