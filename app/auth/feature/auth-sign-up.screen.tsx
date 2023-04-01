import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { UiScreen } from '../../ui/ui-screen'
import { useAuth } from '../data-access/auth-provider'
import { AuthUiForm } from '../ui/auth-ui-form'

type Props = NativeStackScreenProps<ParamListBase>
export function AuthSignUpScreen({ navigation }: Props) {
  const { registering, register } = useAuth()
  return (
    <UiScreen withScrollView>
      <View style={{ justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 32 }}>
          <View style={{ paddingVertical: 32 }}>
            <Text variant="headlineMedium" style={{ textAlign: 'center', fontWeight: '500', letterSpacing: 2 }}>
              Create your account
            </Text>
          </View>
        </View>
        <View style={{ gap: 16, padding: 32, flexGrow: 1 }}>
          <AuthUiForm disclaimer label="Sign up" loading={registering} submit={register} />
        </View>
      </View>
    </UiScreen>
  )
}
