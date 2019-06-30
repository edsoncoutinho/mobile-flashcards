import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TouchableButton({ children, onPress, styleText = {}, styleButton = {}, disabled = false }) {
  return (
    <TouchableOpacity disabled={disabled} style={[styles.button, styleButton, { backgroundColor: (disabled) ? 'lightgray' : styleButton.backgroundColor, borderColor: (disabled) ? 'lightgray' : styleButton.backgroundColor }]} onPress={onPress}>
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