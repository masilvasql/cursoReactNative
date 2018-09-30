import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './src/commonStyles'
import Agenda from './src/screens/Agenda'

export default class App extends React.Component {
  render() {
    return (
      <Agenda/>
    );
  }
}

