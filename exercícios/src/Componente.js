import React, {Component} from 'react'
import {View, Text,StatusBar,StyleSheet} from 'react-native'

export default class Componente extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.f20}>App Função!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	f20:{
		fontSize: 40,
	}
})