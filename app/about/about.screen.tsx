import { NavigationProp } from '@react-navigation/native'
import { Alert, ScrollView, TextComponent, View } from 'react-native'
import { Avatar, IconButton, Button, Text, useTheme } from 'react-native-paper'
import { UiScreen } from '../ui/ui-screen'
import { StyleSheet } from 'react-native'

import type { ParamListBase } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Card, Chip, DataTable } from 'react-native-paper'
import { useState } from 'react'
import { useUiTheme } from '../ui/ui-theme-provider'
type Props = NativeStackScreenProps<ParamListBase>

export const teamsList = [
  {
    key: 1,
    name: 'Team Paper',
    matchesPlayed: 16,
    goals: 100,
    points: 48,
  },
  {
    key: 2,
    name: 'Team Red',
    matchesPlayed: 16,
    goals: 99,
    points: 47,
  },
  {
    key: 3,
    name: 'Team Green',
    matchesPlayed: 16,
    goals: 98,
    points: 46,
  },
  {
    key: 4,
    name: 'Team Blue',
    matchesPlayed: 16,
    goals: 97,
    points: 45,
  },
  {
    key: 5,
    name: 'Team Orange',
    matchesPlayed: 16,
    goals: 96,
    points: 44,
  },
  {
    key: 6,
    name: 'Team Yellow',
    goals: 95,
    matchesPlayed: 16,
    points: 43,
  },
  {
    key: 7,
    name: 'Team Pink',
    goals: 94,
    matchesPlayed: 16,
    points: 42,
  },
  {
    key: 8,
    name: 'Team Cyan',
    goals: 93,
    matchesPlayed: 16,
    points: 41,
  },
  {
    key: 9,
    name: 'Team Paper Dark',
    goals: 92,
    matchesPlayed: 16,
    points: 40,
    darkMode: true,
  },
  {
    key: 10,
    name: 'Team Red Dark',
    goals: 91,
    matchesPlayed: 16,
    points: 39,
    darkMode: true,
  },
  {
    key: 11,
    name: 'Team Green Dark',
    goals: 90,
    matchesPlayed: 16,
    points: 38,
    darkMode: true,
  },
  {
    key: 12,
    name: 'Team Blue Dark',
    goals: 89,
    matchesPlayed: 16,
    points: 37,
    darkMode: true,
  },
  {
    key: 13,
    name: 'Team Orange Dark',
    goals: 88,
    matchesPlayed: 16,
    points: 36,
    darkMode: true,
  },
  {
    key: 14,
    name: 'Team Yellow Dark',
    goals: 87,
    matchesPlayed: 16,
    points: 35,
    darkMode: true,
  },
  {
    key: 15,
    name: 'Team Pink Dark',
    goals: 86,
    matchesPlayed: 16,
    points: 34,
    darkMode: true,
  },
  {
    key: 16,
    name: 'Team Cyan Dark',
    goals: 85,
    matchesPlayed: 16,
    points: 33,
    darkMode: true,
  },
]

type Mode = 'elevated' | 'outlined' | 'contained'

export function AboutScreen({ navigation, route }: Props) {
  const { colors } = useTheme()
  const { toggleTheme } = useUiTheme()
  const modes = ['elevated', 'outlined', 'contained']
  const [selectedMode, setSelectedMode] = useState('elevated' as Mode)
  const [isSelected, setIsSelected] = useState(false)

  return (
    <UiScreen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
      </View>
      <View style={styles.preference}>
        {(modes as Mode[]).map((mode) => (
          <Chip
            key={mode}
            selected={selectedMode === mode}
            mode="outlined"
            onPress={() => setSelectedMode(mode)}
            style={styles.chip}
          >
            {mode}
          </Chip>
        ))}
      </View>

      <ScrollView
        style={[styles.container, { backgroundColor: colors?.background }]}
        contentContainerStyle={styles.content}
      >
        <Card style={styles.card} mode={selectedMode}>
          <Card.Cover source={require('../../assets/icon.png')} />
          <Card.Title title="Abandoned Ship" />
          <Card.Content>
            <Text variant="bodyMedium">
              The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn, originally being a ship named the S.S.
              Cactus. The second part of the ship can only be accessed by using Dive and contains the Scanner.
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.card} mode={selectedMode}>
          <Card.Cover source={require('../../assets/icon.png')} />
          <Card.Title
            title="Title variant"
            subtitle="Subtitle variant"
            titleVariant="headlineMedium"
            subtitleVariant="bodyLarge"
          />
          <Card.Content>
            <Text variant="bodyMedium">This is a card using title and subtitle with specified variants.</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card} mode={selectedMode}>
          <Card.Cover source={require('../../assets/icon.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Explore</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card} mode={selectedMode}>
          <Card.Title
            title="Berries that are trimmed at the end"
            subtitle="Omega Ruby"
            left={(props: any) => <Avatar.Icon {...props} icon="folder" />}
            right={(props: any) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
          />
          <Card.Content>
            <Text variant="bodyMedium">
              Dotted around the Hoenn region, you will find loamy soil, many of which are housing berries. Once you have
              picked the berries, then you have the ability to use that loamy soil to grow your own berries. These can
              be any berry and will require attention to get the best crop.
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.card} mode={selectedMode}>
          <Card.Cover source={require('../../assets/icon.png')} />
          <Card.Title title="Custom Button styles" />
          <Card.Actions>
            <Button style={styles.button} onPress={() => {}}>
              Share
            </Button>
            <Button style={styles.button} onPress={() => {}}>
              Explore
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card} mode={selectedMode}>
          <Card.Cover source={require('../../assets/icon.png')} />
          <Card.Title
            title="Just Strawberries"
            subtitle="... and only Strawberries"
            right={(props: any) => (
              <IconButton
                {...props}
                icon={isSelected ? 'heart' : 'heart-outline'}
                onPress={() => setIsSelected(!isSelected)}
              />
            )}
          />
        </Card>
        <Card
          style={styles.card}
          onPress={() => {
            Alert.alert('The Chameleon is Pressed')
          }}
          mode={selectedMode}
        >
          <Card.Cover source={require('../../assets/icon.png')} />
          <Card.Title title="Pressable Chameleon" />
          <Card.Content>
            <Text variant="bodyMedium">This is a pressable chameleon. If you press me, I will alert.</Text>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onLongPress={() => {
            Alert.alert('The City is Long Pressed')
          }}
          mode={selectedMode}
        >
          <Card.Cover source={require('../../assets/icon.png')} />
          <Card.Title title="Long Pressable City" left={(props) => <Avatar.Icon {...props} icon="city" />} />
          <Card.Content>
            <Text variant="bodyMedium">This is a long press only city. If you long press me, I will alert.</Text>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onPress={() => {
            toggleTheme()
          }}
          mode={selectedMode}
        >
          <Card.Title title="Pressable Theme Change" left={(props) => <Avatar.Icon {...props} icon="format-paint" />} />
          <Card.Content>
            <Text variant="bodyMedium">This is pressable card. If you press me, I will switch the theme.</Text>
          </Card.Content>
        </Card>
      </ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.first}>Team</DataTable.Title>
          <DataTable.Title numeric>MP</DataTable.Title>
          <DataTable.Title numeric>G</DataTable.Title>
          <DataTable.Title numeric>PTS</DataTable.Title>
        </DataTable.Header>

        {teamsList.map((item) => (
          <DataTable.Row
            key={item.key}
            onPress={() =>
              navigation.navigate('teamDetails', {
                sourceColor: item.name.split(' ')[1].toLowerCase(),
                headerTitle: item.name,
                darkMode: item.darkMode,
              })
            }
          >
            <DataTable.Cell style={styles.first}>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.matchesPlayed}</DataTable.Cell>
            <DataTable.Cell numeric>{item.goals}</DataTable.Cell>
            <DataTable.Cell numeric>{item.points}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </UiScreen>
  )
}
const styles = StyleSheet.create({
  content: {
    padding: 4,
  },
  first: {
    flex: 2,
  },
  container: {
    flex: 1,
  },
  card: {
    margin: 4,
  },
  chip: {
    margin: 4,
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 12,
  },
})
