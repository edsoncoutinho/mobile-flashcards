import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'MobileFlashCards:deck'

export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return results === null
        ? false
        : JSON.parse(results)
    })
}

export function getDeck (key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      return data[key]
    })
}

export function saveDeckTitle (key) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: {
      title: key,
      questions: []
    }
  }))
}

export function addCardToDeck ({ key, card }) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key].questions.push(card)
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}
