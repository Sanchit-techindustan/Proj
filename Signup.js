import React, { Component } from 'react'
import { Text, View,  Button } from 'react-native'
import { useTheme } from '@react-navigation/native';
class Signup extends Component {
    render() {
        const { theme : {colors} } = this.props; 
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{color: colors.text}}> Sign Up Screen </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

export default function(props){
    const theme = useTheme()
    return <Signup {...props} theme={theme} />;
}