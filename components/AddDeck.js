import React from 'react'
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

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
        <Text>What is the title of your new deck?</Text>

        <TextInput
          style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
        />

        <TouchableOpacity
          onPress={this.submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddDeck)