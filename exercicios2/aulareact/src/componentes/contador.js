import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StatusBar,Button} from 'react-native'

export default class Contador extends Component{

    state = {
        numero:this.props.numeroInicial
    }

    maisUm = ()=> {
        this.setState({numero:this.state.numero+1})
    }

    limpar = ()=>{
        this.setState({numero:this.props.numeroInicial})
    }


    render(){
        return(
            <View style={{marginTop:StatusBar.currentHeight}}>
            <Text style={{fontSize:30}}>{this.state.numero}</Text>
            <TouchableOpacity
                onPress={this.maisUm}
            >
                <Text>Incrementar</Text>
            </TouchableOpacity>
            <Button title='Limpar' onPress = {this.limpar}></Button>
                
            </View>
        )
    }
}