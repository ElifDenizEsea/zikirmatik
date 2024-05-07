import { ImageBackground, View } from 'react-native';
import Counter from './counter/Counter';
import MyList from './list/MyList';
import AddToList from './list/AddToList';
import ShowItemFromList from './list/ShowItemFromList';
import showQibla from './qibla/showQibla';
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
      <Stack.Screen name="AddToList" component={AddToList} />
      <Stack.Screen name="ShowItemFromList" component={ShowItemFromList} />
      <Stack.Screen name="showQibla" component={showQibla} />
     </Stack.Navigator>
    </NavigationContainer>
       
  );
}

export default App;