import { ActivityIndicator, MD3Colors, Text } from 'react-native-paper'
import { UiScreen } from './ui/ui-screen'

export function SplashScreen() {
  return (
    <UiScreen contentContainerStyle={{ height: '100%', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Text>SPLASH</Text>
      <ActivityIndicator animating={true} color={MD3Colors.primary70} />
    </UiScreen>
  )
}
