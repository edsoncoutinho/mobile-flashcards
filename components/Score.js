import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TouchableButton from './TouchableButton'

export default function Score({ percent, correct, total, restart, goBack }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.title}>Score: {percent.toFixed(0)}%</Text>
      <Text style={styles.info}>You hit {correct} of {total} cards</Text>
      <TouchableButton onPress={restart}>
        Restart
      </TouchableButton>
      <TouchableButton styleButton={{ backgroundColor: 'black' }} styleText={{ color: 'white' }} onPress={goBack}>
        Finish
      </TouchableButton>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20
  },
  info: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  }
})