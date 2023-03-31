import { getHeaderTitle } from '@react-navigation/elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Appbar, Switch } from 'react-native-paper'
import { AboutScreen } from './about/about.screen'
import { useAuth } from './auth/auth-provider'
import { DetailsScreen, HomeScreen, SettingsScreen } from './home/home.screen'
import { AuthScreen } from './auth.screen'
import { SplashScreen } from './splash.screen'
import { useUiTheme } from './ui/ui-theme-provider'

const Stack = createNativeStackNavigator()

export function AppNavigation() {
  const { loggedIn, logout, login, loading } = useAuth()

  if (loading) {
    return <SplashScreen />
  }

  return (
    <Stack.Navigator
    // screenOptions={{
    //   header: (props) => <CustomNavigationBar {...props} />,
    // }}
    >
      {loggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{
              headerShown: false,
              animation: 'none',
              // animationTypeForReplace: loggedIn ? 'push' : 'pop',
            }}
          />
        </>
      )}

      <Stack.Group navigationKey={loggedIn ? 'user' : 'guest'}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export function CustomNavigationBar({ navigation, route, options, back }: any) {
  const title = getHeaderTitle(options, route.name)
  const { toggleTheme, isDark } = useUiTheme()

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? <Switch value={isDark} onValueChange={toggleTheme} /> : null}
    </Appbar.Header>
  )
}
