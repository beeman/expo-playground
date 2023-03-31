import * as React from 'react'
import { ReactNode } from 'react'
import { View } from 'react-native'
import 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppNavigation } from './app/app-navigation'
import { AuthProvider } from './app/auth/data-access/auth-provider'
import { UiThemeProvider } from './app/ui/ui-theme-provider'

export default function App() {
  return (
    <UiThemeProvider>
      <AuthProvider>
        <AppWrapper>
          <AppNavigation />
        </AppWrapper>
      </AuthProvider>
    </UiThemeProvider>
  )
}

export function AppWrapper({ children }: { children: ReactNode }) {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const containerStyle = [
    {
      height: '100%',
      backgroundColor: theme.colors.background,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.left,
    },
  ]

  return <View style={[containerStyle]}>{children}</View>
}
