import { getHeaderTitle } from '@react-navigation/elements'
import { Appbar, Switch } from 'react-native-paper'
import { useAuth } from './auth/data-access/auth-provider'
import { AuthFeature } from './auth/feature/auth.feature'
import { ShellFeature } from './shell/feature/shell-feature'
import { SplashScreen } from './splash.screen'
import { useUiTheme } from './ui/ui-theme-provider'

export function AppNavigation() {
  const { loggedIn, logout, login, loading } = useAuth()

  if (loading) {
    return <SplashScreen />
  }

  return loggedIn ? <ShellFeature /> : <AuthFeature />
}
