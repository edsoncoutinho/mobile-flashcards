import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TouchableButton from './TouchableButton'

class DeckView extends React.Component {
  render() {
    const { deck, navigation } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.questions.length} cards</Text>
        <TouchableButton onPress={() => navigation.navigate('AddCard', {key: deck.title})}>
          Add Card
        </TouchableButton>
        <TouchableButton styleButton={{backgroundColor: 'black'}} styleText={{color: 'white'}} onPress={() => navigation.navigate('Quiz', {key: deck.title})}>
          Start Quiz
        </TouchableButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20
  },
  cards: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20
  }
})

function mapStateToProps(state, { navigation }) {
  const key = navigation.state.params.key
  return {
    deck: state[key]
  }
}

export default connect(mapStateToProps)(DeckView)