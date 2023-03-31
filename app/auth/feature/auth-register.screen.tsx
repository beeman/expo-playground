import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SafeAreaView, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { UiScreen } from '../../ui/ui-screen'
import { useAuth } from '../data-access/auth-provider'

type Props = NativeStackScreenProps<ParamListBase>
export function AuthRegisterScreen({ navigation }: Props) {
  const { login } = useAuth()
  return (
    <UiScreen contentContainerStyle={{ height: '100%' }} withScrollView>
      <SafeAreaView style={{ height: '100%', justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 32 }}>
          <View style={{ paddingVertical: 32 }}>
            <Text variant="headlineMedium" style={{ textAlign: 'center', fontWeight: '500', letterSpacing: 2 }}>
              Register
            </Text>
          </View>
        </View>
        <View style={{ gap: 16, padding: 32 }}>
          <Button mode="contained" onPress={() => navigation.goBack()}>
            Back
          </Button>
        </View>
      </SafeAreaView>
    </UiScreen>
  )
}
