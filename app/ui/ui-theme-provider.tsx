import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import merge from 'deepmerge'

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

export interface UiThemeProviderContext {
  toggleTheme: () => void
  isDark: boolean
}

const UiThemeContext = createContext<UiThemeProviderContext>({} as UiThemeProviderContext)

export function UiThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true)

  let theme = isDark ? CombinedDarkTheme : CombinedDefaultTheme

  const toggleTheme = useCallback(() => {
    return setIsDark(!isDark)
  }, [isDark])

  const value: UiThemeProviderContext = useMemo(
    () => ({
      toggleTheme,
      isDark,
    }),
    [toggleTheme, isDark],
  )

  return (
    <UiThemeContext.Provider value={value}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </PaperProvider>
    </UiThemeContext.Provider>
  )
}

export const useUiTheme = () => useContext(UiThemeContext)
