import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'

class DeckView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deck View</Text>
      </View>
    );
  }
}

const DeckListStack = createStackNavigator({
  DeckList: DeckList,
  DeckView: DeckView,
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
