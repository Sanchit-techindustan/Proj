import React, { Component } from 'react'
import { Text, View,  Button } from 'react-native'

export default class Signup extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Sign Up Screen </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}
