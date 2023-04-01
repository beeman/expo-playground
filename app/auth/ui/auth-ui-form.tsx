import { useMemo, useState } from 'react'
import { View } from 'react-native'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { AuthUiDisclaimer } from './auth-ui-disclaimer'

export function AuthUiForm({
  disclaimer,
  label,
  loading,
  submit,
}: {
  disclaimer?: boolean
  label: string
  loading: boolean
  submit: (input: { email: string; password: string }) => Promise<void>
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handle = () => {
    submit({
      email,
      password,
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const hasEmailError = useMemo(() => {
    if (!email || email.length < 6) return false
    console.log('hasEmailError', email)
    return !email.includes('@')
  }, [email])

  const hasPasswordError = useMemo(() => {
    if (!password) return false
    return password.length < 8
  }, [password])

  const isValid = useMemo(() => {
    if (email.length < 6 || password.length < 8) return false
    return !hasEmailError && !hasPasswordError
  }, [hasEmailError, hasPasswordError])

  return (
    <View style={{ gap: 16 }}>
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        autoFocus
      />
      {hasEmailError ? (
        <HelperText type="error" visible={hasEmailError}>
          Email address is invalid!
        </HelperText>
      ) : null}
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoComplete="password"
        textContentType="password"
      />
      {hasPasswordError ? (
        <HelperText type="error" visible={hasPasswordError}>
          Password must be at least 8 characters
        </HelperText>
      ) : null}
      {disclaimer ? <AuthUiDisclaimer /> : null}
      <Button disabled={!isValid} mode="contained" onPress={handle} loading={loading}>
        {label}
      </Button>
    </View>
  )
}
