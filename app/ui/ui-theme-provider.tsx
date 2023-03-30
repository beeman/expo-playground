import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import merge from 'deepmerge'

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper'

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
})

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

export interface UiThemeProviderContext {
  toggleTheme: () => void
  isThemeDark: boolean
}

const UiThemeContext = createContext<UiThemeProviderContext>({} as UiThemeProviderContext)

export function UiThemeProvider({ children }: { children: ReactNode }) {
  const [isThemeDark, setIsThemeDark] = useState(true)

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark)
  }, [isThemeDark])

  const value: UiThemeProviderContext = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
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
