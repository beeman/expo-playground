import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Avatar, MD3Colors } from 'react-native-paper'
import { AboutScreen } from '../../about/about.screen'
import { DetailsScreen, HomeScreen, SettingsScreen } from '../../home/home.screen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export function ShellFeature() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor={MD3Colors.primary70} />,
        // drawerIcon: ({ focused, color, size }) => {
        //   return <Avatar.Icon icon="home" size={size} color={color} />
        // },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
