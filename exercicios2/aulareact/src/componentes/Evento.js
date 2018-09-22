import React, {Component} from 'react'
import {View, Text, TextInput,StatusBar} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component{

    state = {
        texto:''
    }
    /* Se o atributo for exatamente o mesmo nome do estado, 
       não precisa referenciar como this.setState({texto:texto}) */
    alterarTexto = texto => { 
        this.setState({texto})
    }

    render(){
        return(
            <View style={{marginTop:StatusBar.currentHeight}}>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput 
                    value={this.state.texto}
                    style={Padrao.input}
                    onChangeText = {this.alterarTexto}
                >
                
                </TextInput>
            </View>
        )
    }

}