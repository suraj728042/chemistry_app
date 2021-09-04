import React from 'react';
import {View,Text,ScrollView,Image,StyleSheet, TouchableOpacity} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Importing Components
import Unit1 from './Unit1'
import Screen from './Screen'

//Stack nav
const Stack = createStackNavigator();

export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='none' initialRouteName="Screen">
                    <Stack.Screen name="Screen">
                        {({navigation})=><Screen navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Unit1">
                        {({navigation})=><Unit1 username="Tushar" navigation={navigation}/>}
                    </Stack.Screen>               
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}