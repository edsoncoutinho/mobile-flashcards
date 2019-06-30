import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TouchableButton ({ children, onPress, styleText = {}, styleButton = {} }) {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    margin: 20,
    marginBottom: 0,
    borderRadius: 5,
    borderWidth: 1
  },
  text: {
    textAlign: 'center',
    padding: 15
  }
})