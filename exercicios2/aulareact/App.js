import React from 'react';
import Componente  from './src/Componente'

import {AppRegistry, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <Componente/>
    );
  }
}

AppRegistry.registerComponent('App',()=>App)

