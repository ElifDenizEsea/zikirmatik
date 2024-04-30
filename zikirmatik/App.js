import { ImageBackground, View } from 'react-native';
import Counter from './counter/Counter';
import MyList from './list/MyList';
import CustomStyle from './style/customStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>

     <Stack.Navigator initialRouteName="Counter">
     <Stack.Screen name="Counter" component={Counter} />
     <Stack.Screen name="MyList" component={MyList} />
  </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;