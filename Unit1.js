import React from 'react'
import {View, Text} from 'react-native'

export default class Unit1 extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(<View><Text>{this.props.username ? this.props.username : "No username"}</Text></View>)
    }
}