import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex:1,
        padding: 20,
        padding:20,
        justifyContent:'center',
        backgroundColor: 'rgba(52, 73, 94,1.0)',
        alignItems: 'flex-end',
    },
    displayValue:{
        fontSize: 60,
        color:'#fff'
    }
})

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
    </View>