import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

const DeckListStack = createStackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: () => ({
      title: `Flash Cards`,
      headerBackTitle: `to List`,
    }),
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.key} Deck`,
      headerBackTitle: `to Deck`,
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: () => ({
      title: `Add Card`,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => ({
      title: `Quiz`,
    }),
  }
},
{
  headerBackTitleVisible: true,
  headerLayoutPreset: 'center',
});

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    DeckList: DeckListStack,
    AddDeck: AddDeck,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = MaterialCommunityIcons
        let iconName;
        if (routeName === 'DeckList') {
          iconName = `cards${focused ? '' : '-outline'}`
        } else if (routeName === 'AddDeck') {
          iconName = `plus-box${focused ? '' : '-outline'}`
        }
        return <IconComponent name={iconName} size={30} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
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
