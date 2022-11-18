import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'FiraSans': require('./src/assets/fonts/FiraSans-SemiBold.ttf'),
    'FiraSans2': require('./src/assets/fonts/FiraSans-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return <ShopNavigator/>
}
