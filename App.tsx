import { StatusBar } from 'expo-status-bar'
import { AppNavigation } from './app/app-navigation'
import { AuthProvider } from './app/auth/auth-provider'
import { UiThemeProvider } from './app/ui/ui-theme-provider'

export default function App() {
  return (
    <UiThemeProvider>
      <AuthProvider>
        <AppNavigation />
        <StatusBar style="auto" />
      </AuthProvider>
    </UiThemeProvider>
  )
}
