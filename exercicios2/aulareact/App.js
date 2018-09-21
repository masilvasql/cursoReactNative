import React from 'react';  
import {AppRegistry, View,StatusBar} from 'react-native';
import Menu from './src/Menu'


export default class App extends React.Component {
  render() {
    return (
     
        <Menu/>

        
    );
  }
}

 AppRegistry.registerComponent('App',()=>App)




