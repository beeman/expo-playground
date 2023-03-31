import { Linking } from 'react-native'
import { useTheme } from 'react-native-paper'
import { UiTextButton } from './ui-text-button'

export function UiTextLink({ fontSize, label, href }: { label: string; fontSize?: number; href: string }) {
  const { colors } = useTheme()
  const open = () => {
    Linking.openURL(href)
      .then(() => {})
      .catch((err) => {
        console.log('Error opening url', err)
      })
  }
  return <UiTextButton fontSize={fontSize} label={label} onPress={open} />
}
