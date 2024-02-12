import React, { useState } from 'react';
import {StyleSheet, View, Text, Button, TextInput } from 'react-native';
const Counter = () => {
    const [count, setCount] = useState(0);
   return (
        <View>
            <Text> Zikir sayisi giriniz </Text>
            <TextInput />

           <Button
             title="Baslat" onPress={() => {setCount(0)}}
           />
    <Text>


    </Text>


    <Button 
             onPress={() => {setCount(count + 1)}} style = {styles.Button} title=" "
           />
           <Text>
      
</Text>

           <Button
             onPress={() => {setCount(0)}} title="Sifirla"
           />
           <Text>You clicked me {count} times</Text>
       </View>
   );
}
const styles = (props) => StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 0,
    backgroundColor: 'rgba(255,95,28,0.42)', //add a background to highlight the touchable area
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.51)',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: (props.circleDiameter / 2),
    width: props.circleDiameter,
    height: props.circleDiameter,
  },
});
export default Counter;