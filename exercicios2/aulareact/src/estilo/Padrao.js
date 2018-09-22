import {StyleSheet, StatusBar} from 'react-native'


export default StyleSheet.create({
    ex:{
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: StatusBar.currentHeight,
    },
    input:{
        height:70,
        fontSize:40,
        borderColor:'gray',
        borderWidth:1
    },
    fonte40:{
        fontSize:40
    }
})