import React from "react"
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { useTheme } from '@react-navigation/native';
import { TextInput } from 'react-native';

const Login = (props) => {
  const [data, setData] = React.useState({
    username: '',
    password: ''
});

const onChangeText = (e,key) => {
    console.log(e,"Here is Synteic")
    if(key === "username"){
      setData({
        ...data,
        username: e
      })
    }
    else if(key === "password") {
      setData({
        ...data,
        password: e
      })
    }
}

const { colors } = useTheme();
return ( 
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: colors.text}}>Login Screen</Text>
      <TextInput
      style={{ borderColor: 'gray', borderWidth: 1, width:"80%" }}
      onChangeText={text => onChangeText(text, "username")}
      // value={value}
  />
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, width: "80%", marginTop: "10%", marginBottom: "5%" }}
        onChangeText={(e) => onChangeText(e, "password")}
        // value={value}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Signup')}
      />
  </View>
    );
  }

  export default Login