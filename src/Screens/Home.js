import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({ navigation }) {

    let channelInfo = {
        id: 1,
        name: 'Canal Geek Dev',
        stars: 123456
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Button
                title="Go to Detail Screen"
                onPress= { () => navigation.navigate('Detail', {
                    channelInfo
                }) }
            />

        </View>
    )
}
