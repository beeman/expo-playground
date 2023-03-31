import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SafeAreaView, View } from 'react-native'
import { Button, Divider, Text } from 'react-native-paper'
import { UiIcon } from '../../ui/ui-icon'
import { UiScreen } from '../../ui/ui-screen'
import { UiTextButton } from '../../ui/ui-text-button'
import { useAuth } from '../data-access/auth-provider'
import { AuthUiDisclaimer } from '../ui/auth-ui-disclaimer'

type Props = NativeStackScreenProps<ParamListBase>
export function AuthMainScreen({ navigation }: Props) {
  const { login } = useAuth()
  return (
    <UiScreen contentContainerStyle={{ height: '100%' }} withScrollView>
      <SafeAreaView style={{ height: '100%', justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 32 }}>
          <UiIcon />
          <View style={{ paddingVertical: 32 }}>
            <Text variant="headlineMedium" style={{ textAlign: 'center', fontWeight: '500', letterSpacing: 2 }}>
              Join the Bird App!
            </Text>
          </View>
        </View>
        <View style={{ gap: 16, padding: 32 }}>
          <Button disabled icon="google" mode="outlined">
            Continue with Google
          </Button>
          <Button disabled icon="apple" mode="outlined">
            Continue with Apple
          </Button>

          <Divider />
          <Button mode="contained" onPress={() => navigation.navigate('Register')}>
            Create Account
          </Button>

          <AuthUiDisclaimer />

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 32 }}>
            <Text>Have an account already? </Text>
            <UiTextButton label="Log in" onPress={login} />
          </View>
        </View>
      </SafeAreaView>
    </UiScreen>
  )
}
