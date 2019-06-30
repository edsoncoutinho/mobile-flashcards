import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'

const DeckListStack = createStackNavigator({
  DeckList: DeckList,
  DeckView: DeckView,
  AddCard: AddCard,
});

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    DeckList: DeckListStack,
    AddDeck: AddDeck,
  }
))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}
