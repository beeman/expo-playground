import { ActivityIndicator, MD3Colors } from 'react-native-paper'
import { UiIcon } from './ui/ui-icon'
import { UiScreen } from './ui/ui-screen'

export function SplashScreen() {
  return (
    <UiScreen contentContainerStyle={{ height: '100%', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
      <UiIcon size={64} />
      <ActivityIndicator animating={true} color={MD3Colors.primary10} />
    </UiScreen>
  )
}
