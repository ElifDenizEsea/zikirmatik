import { ImageBackground, View } from 'react-native';
import Counter from './counter/Counter';
import MyList from './list/MyList';
import AddToList from './list/AddToList';
import ShowItemFromList from './list/ShowItemFromList';
import CustomStyle from './style/customStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <View style={CustomStyle.container}>
    <ImageBackground source={require('./assets/wallpaper.jpg')} style={CustomStyle.imageWallpaper}  resizeMode="cover" >
    
    <NavigationContainer theme={navTheme} >

     <Stack.Navigator initialRouteName="Counter" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Counter" component={Counter}  />
      <Stack.Screen name="MyList" component={MyList} />
      <Stack.Screen name="AddToList" component={AddToList} />
      <Stack.Screen name="ShowItemFromList" component={ShowItemFromList} />
     </Stack.Navigator>
    </NavigationContainer>
    </ImageBackground>
    </View>
  );
}

export default App;