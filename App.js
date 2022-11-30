import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'FiraSans': require('./src/assets/fonts/FiraSans-SemiBold.ttf'),
    'FiraSans2': require('./src/assets/fonts/FiraSans-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return <BottomTabNavigator/>
}
