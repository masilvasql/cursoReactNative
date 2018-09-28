import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import params from './src/params'
import Field from './src/components/Fields'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>
          O Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines ={1}/>
        <Field opened nearMines ={2}/>
        <Field opened nearMines ={3}/>
        <Field opened nearMines ={6}/>
        <Field opened />
        <Field opened mined/>
        <Field opened mined exploded/>
        <Field flagged />
        <Field flagged opened/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
