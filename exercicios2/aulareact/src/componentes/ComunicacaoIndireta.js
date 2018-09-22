import React, { Component } from 'react'
import { View, Text, TextInput,StatusBar } from 'react-native'
import Padrao from '../estilo/Padrao'
import {Entrada} from './Entrada'
// export const Entrada = props =>
//     <View>
//         <TextInput
//             value={props.texto}
//             style={Padrao.input}
//             onChangeText={props.chamarQuandoMudar}
//         />
//     </View>
// componente está em outro arquivo
export class TextoSincronizado extends Component {
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View style={{margin:StatusBar.currentHeight}}>
                <Text
                    value={this.state.texto}
                    style={Padrao.fonte40}
                >
                    {this.state.texto}
                </Text>
                <Entrada
                    texto={this.state.texto}
                    chamarQuandoMudar={this.alterarTexto}
                />
            </View>
        )
    }
}
