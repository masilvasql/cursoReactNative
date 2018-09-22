import React from 'react'
import {createDrawerNavigator} from 'react-navigation'
import Simples from './componentes/simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/contador'
import Plataformas from './componentes/plataformas'

export default createDrawerNavigator({
    Plataformas:{
        screen:()=> <Plataformas/>
    },
    Contador:{
        screen: ()=> <Contador numeroInicial={100}/>
    },
    MegaSena:{
        screen: ()=> <MegaSena numeros = {8}/>,
        navigationOptions: { title:'Mega Sena' }
    },
    Inverter:{
        screen: ()=> <Inverter texto = 'React Native'/>
    },
    ParImpar:{
        screen: ()=> <ParImpar numero = {55}/>,
        navigationOptions: { title: 'Par e Impar'}
    },
    Simples:{
        screen: ()=> <Simples texto='Marcelo' sobrenome='Abrão da Silva'/>
    },
},{
    drawerWidth:300,
    
}

)