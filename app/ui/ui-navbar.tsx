import { getHeaderTitle } from '@react-navigation/elements'
import { Appbar, Switch } from 'react-native-paper'
import { UiIcon } from './ui-icon'
import { useUiTheme } from './ui-theme-provider'

export function UiNavbar({ navigation, route, options, back }: any) {
  const title = getHeaderTitle(options, route.name)
  const { toggleTheme, isDark } = useUiTheme()

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title?.length ? title : <UiIcon size={32} />} />
      {!back ? <Switch value={isDark} onValueChange={toggleTheme} /> : null}
    </Appbar.Header>
  )
}
