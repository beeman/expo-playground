import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useAuth } from './auth/auth-provider'

export function AuthScreen() {
  const { loggedIn, logout, login, loading } = useAuth()
  return (
    <View style={styles.container}>
      <Button icon="lock" mode="contained" onPress={login}>
        Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
