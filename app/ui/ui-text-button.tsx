import { TouchableOpacity } from 'react-native'
import { Text, useTheme } from 'react-native-paper'

export function UiTextButton({ fontSize, label, onPress }: { fontSize?: number; label: string; onPress: () => void }) {
  const { colors } = useTheme()
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: colors.primary, fontSize }}>{label}</Text>
    </TouchableOpacity>
  )
}
