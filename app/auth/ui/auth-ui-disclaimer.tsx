import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { UiTextLink } from '../../ui/ui-text-link'

export function AuthUiDisclaimer() {
  const fontSize = 10
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Text style={{ fontSize }}>By singing up, you agree to our </Text>
      <UiTextLink fontSize={fontSize} label="Terms of Service" href="https://example.com" />
      <Text style={{ fontSize }}>, </Text>
      <UiTextLink fontSize={fontSize} label="Privacy Policy" href="https://example.com" />
      <Text style={{ fontSize }}>and </Text>
      <UiTextLink fontSize={fontSize} label="Cookie use" href="https://example.com" />
      <Text style={{ fontSize }}>.</Text>
    </View>
  )
}
