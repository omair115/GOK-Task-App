import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/store/TodoApp'
import store from './src/store'
import { Provider } from 'react-redux'
import HeaderTitle from './src/components/header'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
    
        <TodoApp />
        
      </Provider>
    );
  }
}

