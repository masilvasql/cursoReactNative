import React from 'react'
import { ScrollView, View, FlatList, Text, StatusBar } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 9.1 },
    { id: 3, nome: 'Cláudia', nota: 5.4 },
    { id: 4, nome: 'Roberto', nota: 6.8 },
    { id: 5, nome: 'Marcelo', nota: 8.8 },
    { id: 6, nome: 'Matheus', nota: 9.2 },
    { id: 7, nome: 'Pedro', nota: 4.8 },
    { id: 8, nome: 'Junior', nota: 8.8 },
    { id: 9, nome: 'Douglas', nota: 9.8 },

    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Ana', nota: 9.1 },
    { id: 13, nome: 'Cláudia', nota: 5.4 },
    { id: 14, nome: 'Roberto', nota: 6.8 },
    { id: 15, nome: 'Marcelo', nota: 8.8 },
    { id: 16, nome: 'Matheus', nota: 9.2 },
    { id: 17, nome: 'Pedro', nota: 4.8 },
    { id: 18, nome: 'Junior', nota: 8.8 },
    { id: 19, nome: 'Douglas', nota: 9.8 },
    { id: 19, nome: 'Douglas', nota: 9.8 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderColor: '#222',
 
    ///Flex

    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection : 'row',
    
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item}/>
    }
    return(
        <ScrollView style={{marginTop:StatusBar.currentHeight}}>
            <FlatList
                data={alunos}
                renderItem ={renderItem}
                keyExtractor ={(_,index)=>index.toString()}
            />
        </ScrollView>
    )
}