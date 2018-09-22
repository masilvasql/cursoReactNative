import React from 'react'
import { Button, Alert, ToastAndroid, Platform, StatusBar, View } from 'react-native'

export default (props) => {
    const notificar = msg => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert('Informação', msg)
        }
    }
    return (
        <View style={{ marginTop: StatusBar.currentHeight }}>
            <Button
                title='Plataforma?'
                onPress={() => notificar('Parabéns')}
            >
            </Button>
        </View>

    )
}