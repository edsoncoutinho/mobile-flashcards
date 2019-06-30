import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import Deck from './Deck'
import TouchableButton from './TouchableButton'

class DeckList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }
  renderItem = ({ item }) => {
    return <Deck {...item} />
  }
  render() {
    const { decks } = this.props
    if (!decks.length) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{textAlign: 'center', fontSize: 30, margin: 20}}>We do not have any registered Decks yet!</Text>
          <Text style={{textAlign: 'center', fontSize: 20, margin: 20}}>Let's start registering one?</Text>
          <TouchableButton styleButton={{ backgroundColor: 'black' }} styleText={{ color: 'white' }} onPress={() => this.props.navigation.navigate('AddDeck')}>
            Add Deck
          </TouchableButton>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const decks = Object.values(state).map((deck) => ({
    key: deck.title,
    title: deck.title,
    questions: deck.questions.length,
    onPress: () => navigation.navigate('DeckView', { key: deck.title })
  })).sort((a, b, ) => a > b)
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)