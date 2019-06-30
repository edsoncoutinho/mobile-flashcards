import React from 'react'
import { Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import TouchableButton from './TouchableButton'

class AddDeck extends React.Component {
  state = {
    title: ''
  }

  submit = () => {
    const { title } = this.state

    this.props.dispatch(addDeck(title))

    this.setState({
      title: ''
    })

    this.props.navigation.dispatch(NavigationActions.back({ title: 'DeckView' }))

    saveDeckTitle(title)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <TextInput
          style={styles.input}
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          placeholder='Deck Title'
        />

        <TouchableButton styleButton={{backgroundColor: 'black'}} styleText={{color: 'white'}} onPress={this.submit}>
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
    padding: 10
  }
})

export default connect()(AddDeck)