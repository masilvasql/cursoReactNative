import React from 'react'
import {View, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export const Entrada = props =>
<View>
    <TextInput
        value={props.texto}
        style={Padrao.input}
        onChangeText={props.chamarQuandoMudar}
    />
</View>