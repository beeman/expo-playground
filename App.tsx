import { getHeaderTitle } from '@react-navigation/elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Appbar, Switch } from 'react-native-paper'
import { DetailsScreen, HomeScreen, SettingsScreen } from './app/home.screen'
import { MainScreen } from './app/main.screen'
import { UiThemeProvider, useUiTheme } from './app/ui/ui-theme-provider'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UiThemeProvider>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </UiThemeProvider>
  )
}

export function CustomNavigationBar({ navigation, route, options, back }: any) {
  const title = getHeaderTitle(options, route.name)
  const { toggleTheme, isThemeDark } = useUiTheme()

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? <Switch value={isThemeDark} onValueChange={toggleTheme} /> : null}
    </Appbar.Header>
  )
}
