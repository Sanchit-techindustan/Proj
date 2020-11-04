import React from 'react'
import { View, Text, Button } from 'react-native'

export function Home(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Login')}
            />
        </View>
    )
}

export function FeedPage() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is Feed Page</Text>
        </View>
    )
}