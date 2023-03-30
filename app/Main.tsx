import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export function Main() {
  return (
    <View style={styles.container}>
      <Text>This, is just a test!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
