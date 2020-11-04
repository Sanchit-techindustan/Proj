import React from "react";
import { StyleSheet, Text, View, Button, TabBarIOS, ClippingRectangle } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import Login from "./Login"
import SignUp from "./Signup"
import {Home, FeedPage} from "./Home"
import Icon from 'react-native-vector-icons/FontAwesome';

const routeStack = createStackNavigator()

const Tab = createBottomTabNavigator();

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

const tabNavigator = () => {
  return(
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
            let iconName
            switch(route.name){
                case "Home":
                  iconName = "home"
                  break
                  
                case "Feed":
                  iconName = "rss"
                  break

                default:
                  iconName="rocket"  
            }
            return <Icon name={iconName} size={size} color="#000"/>
        }
    })}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Feed" component={FeedPage}/>
    </Tab.Navigator>
  )
}

function Routes(){
    return (
        <NavigationContainer>
            <routeStack.Navigator screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <routeStack.Screen name="Login" component={Login} options={{ title: "Login"}} />
                <routeStack.Screen name="Signup" component={SignUp} options={{title: "SignUp"}} />
                <routeStack.Screen name="Home" component={tabNavigator} options={{headerShown: false}}/>
            </routeStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes