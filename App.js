import React from 'react'
import { View, Text } from 'react-native'
import Task from './src/Screens/Task';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';



export default function App() {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  )
}
