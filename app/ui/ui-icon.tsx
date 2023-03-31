import { Avatar } from 'react-native-paper'

export function UiIcon({ size }: { size?: number }) {
  return (
    <Avatar.Image size={size} source={require('../../assets/icon.png')} style={{ backgroundColor: 'transparent' }} />
  )
}
