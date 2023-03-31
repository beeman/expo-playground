import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UiNavbar } from '../../ui/ui-navbar'
import { AuthMainScreen } from './auth-main.screen'
import { AuthRegisterScreen } from './auth-register.screen'

const Stack = createNativeStackNavigator()

export function AuthFeature() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={AuthMainScreen} options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen
        name="Register"
        component={AuthRegisterScreen}
        options={{
          presentation: 'modal',
          title: '',
          header: UiNavbar,
        }}
      />
    </Stack.Navigator>
  )
}
