import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions';

class DeckList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }
  render() {
    const { decks } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{decks}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: JSON.stringify(state)
  }
}

export default connect(mapStateToProps)(DeckList)