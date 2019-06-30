import React from 'react'
import { TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeckCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import TouchableButton from './TouchableButton'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const key = this.props.navigation.state.params.key
    const card = this.state

    this.props.dispatch(addDeckCard({ key, card }))

    this.setState({
      question: '',
      answer: ''
    })

    this.props.navigation.dispatch(NavigationActions.back('DeckView'))

    addCardToDeck({ key, card })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
          placeholder='Question'
        />

        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          placeholder='Answer'
        />

        <TouchableButton styleButton={{ backgroundColor: 'black' }} styleText={{ color: 'white' }} onPress={this.submit}>
          Submit
        </TouchableButton>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding: 10
  }
})

export default connect()(AddCard)