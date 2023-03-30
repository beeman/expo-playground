import { NavigationProp } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { Button, Switch, useTheme } from 'react-native-paper'
import { useUiTheme } from './ui/ui-theme-provider'

export function HomeScreen({ navigation, route }: { navigation: NavigationProp<any>; route: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Details
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Settings')}>
        Settings
      </Button>
    </View>
  )
}
export function DetailsScreen({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <Button mode="contained" onPress={() => navigation.navigate('Home')}>
        Home
      </Button>
    </View>
  )
}

export function SettingsScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const { toggleTheme, isThemeDark } = useUiTheme()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Switch value={isThemeDark} onValueChange={toggleTheme} />
      <Button mode="contained" onPress={() => navigation.navigate('Home')}>
        Home
      </Button>
    </View>
  )
}
