import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import Deck from './Deck'

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
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const decks = Object.values(state).map((deck) => ({
    key: deck.title,
    title: deck.title,
    questions: deck.questions.length,
    onPress: () => navigation.navigate('DeckView', { key: deck.title })
  }))
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)