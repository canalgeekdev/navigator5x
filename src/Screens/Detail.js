import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Detail({ route, navigation }) {

    const { channelInfo } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>
                { JSON.stringify(channelInfo) }
            </Text>

            <Button
                title= "Go Home"
                onPress= { () => navigation.goBack()}
            />

        </View>
    )
}
