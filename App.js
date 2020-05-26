import React from 'react'
import { StyleSheet, View } from 'react-native'
import TabScreen from './src/components/screens/TabScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <TabScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
