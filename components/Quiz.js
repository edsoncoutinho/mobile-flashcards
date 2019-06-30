import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Card from './Card'
import Score from './Score'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends React.Component {
  state = {
    question: '',
    answer: '',
    correct: 0,
    incorrect: 0,
    total: 0,
    remaining: 0
  }

  componentDidMount() {
    const { cards } = this.props
    const remaining = cards.length
    const card = cards[0];
    this.setState({
      question: card.question,
      answer: card.answer,
      total: remaining,
      remaining: remaining
    })
  }

  handleHint = (hint) => {
    const { cards } = this.props
    const { total, remaining } = this.state

    if (remaining - 1) {
      const card = cards[total - (remaining - 1)];
      this.setState((current) => ({
        question: card.question,
        answer: card.answer,
        remaining: current.remaining - 1,
        correct: (hint) ? current.correct + 1 : current.correct,
        incorrect: (!hint) ? current.incorrect + 1 : current.incorrect,
      }))
    } else {
      this.setState((current) => ({
        correct: (hint) ? current.correct + 1 : current.correct,
        incorrect: (!hint) ? current.incorrect + 1 : current.incorrect,
        remaining: current.remaining - 1,
      }))

      clearLocalNotification()
      .then(setLocalNotification)
    }
  }

  restart = () => {
    const { cards } = this.props
    const remaining = cards.length
    const card = cards[0];
    this.setState({
      question: card.question,
      answer: card.answer,
      total: remaining,
      remaining: remaining,
      correct: 0,
      incorrect: 0
    })
  }

  render() {
    const { question, answer, total, remaining, correct } = this.state
    const percent = correct * 100 / total;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {remaining
          ? <Card question={question} answer={answer} total={total} remaining ={remaining} handleHint={this.handleHint} />
          : <Score percent={percent} correct={correct} total={total} restart={this.restart} goBack={() => this.props.navigation.dispatch(NavigationActions.back('DeckView'))} />
        }
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const key = navigation.state.params.key
  const deck = state[key]
  return {
    cards: deck.questions
  }
}

export default connect(mapStateToProps)(Quiz)