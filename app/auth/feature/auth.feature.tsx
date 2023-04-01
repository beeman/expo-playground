import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UiNavbar } from '../../ui/ui-navbar'
import { AuthMainScreen } from './auth-main.screen'
import { AuthSignInScreen } from './auth-sign-in.screen'
import { AuthSignUpScreen } from './auth-sign-up.screen'

const Stack = createNativeStackNavigator()

export function AuthFeature() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={AuthMainScreen} options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="SignIn" component={AuthSignInScreen} options={{ title: '', header: UiNavbar }} />
      <Stack.Screen name="SignUp" component={AuthSignUpScreen} options={{ title: '', header: UiNavbar }} />
    </Stack.Navigator>
  )
}
