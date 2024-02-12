import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
const Greeting = () => {
    const [name, setName] = useState("Sarah");
    
    return (
        <View>
           <TextInput placeholder="Enter your name..."
                      onChangeText={text => setName(text)}
            />
           <Text>Hello {name}!</Text>
        </View>
   );
}
export default Greeting;