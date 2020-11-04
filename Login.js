import React from "react"
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";


 const Login = (props) => {
     console.log(props,"Here are Props")
    return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Signup')}
      />
    </View>
    );
  }

  export default Login