import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Deck({ title, questions, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.card}>{questions} cards</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 30,
    marginTop: 15,
    marginBottom: 15 
  },
  title: {
    fontSize: 30
  },
  card: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold'
  }
})
