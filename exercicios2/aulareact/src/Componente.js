import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './componentes/simples'

export default class Componente extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples
          texto = 'Marcelo'
          sobrenome= 'Abrão da Silva'
        />
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
  },
});
