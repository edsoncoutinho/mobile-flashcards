import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TouchableButton from './TouchableButton'

export default class Card extends React.Component {
  state = {
    flip: false
  }
  toggle = () => {
    this.setState((current) => ({
      flip: !current.flip
    }))
  }
  render() {
    const { question, answer, remaining, total, handleHint } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{alignSelf: 'stretch'}}>{remaining}/{total}</Text>

        {this.state.flip
          ? <View style={styles.card}>
            <Text style={styles.text}>{question}</Text>
            <TouchableOpacity onPress={this.toggle}><Text style={{color: 'red'}}>Answer</Text></TouchableOpacity>
          </View>
          : <View style={styles.card}>
            <Text style={styles.text}>{answer}</Text>
            <TouchableOpacity onPress={this.toggle}><Text style={{color: 'red'}}>Question</Text></TouchableOpacity>
          </View>
        }

        <TouchableButton styleButton={{ backgroundColor: 'green', borderColor: 'green' }} styleText={{ color: 'white' }} onPress={() => handleHint(true)}>
          Correct
        </TouchableButton>
        <TouchableButton styleButton={{ backgroundColor: 'red', borderColor: 'red' }} styleText={{ color: 'white' }} onPress={() => handleHint(false)}>
          Incorrect
        </TouchableButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20
  }
})