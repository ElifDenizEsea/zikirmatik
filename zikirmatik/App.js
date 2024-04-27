import { ImageBackground, View } from 'react-native';
import Counter from './counter/Counter';
import CustomStyle from './style/customStyle';
export default function App() {

  return (
    <View style={CustomStyle.container}>
     <ImageBackground source={require('./assets/wallpaper.jpg')} style={CustomStyle.imageWallpaper}  resizeMode="cover" >
           <Counter />
      </ImageBackground>
    </View>
  );
}
