import React, {Component} from 'react';
import {View,Text,ScrollView,Image,StyleSheet, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



export default class Screen extends Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <ScrollView>
            <View style={{flex:1,alignItems:'center',marginTop:5}}>
                <Text style={{fontSize:25,fontWeight:'bold',}}>Engineering Chemistry</Text>
            </View>
            <View style={{borderBottomColor:"black",borderBottomWidth: 1,marginTop:10}}></View>
            <View>
                <Text style={{fontSize:60,fontWeight:'bold',left:"2%"}}>
                    E<Text style={{fontSize:30,}}>xplore</Text>
                </Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:"center",height: 150,width: 355,backgroundColor: 'salmon',zIndex: 99,left:"1%",borderRadius:10,marginTop:3 }}>
                <Text style={{fontSize:21,color:"white",fontWeight:'bold'}}>Knowledge Is The Only Path That Fulfill Your Dream.</Text>
            </View>
            <View>
                <Text style={{left:"3%",fontSize:30,fontWeight:'bold',marginTop:3}}>
                NOTES
                </Text>  
            </View>
            <View style={{flex:3,marginTop:3,left:"2%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit1")}>
                <Image source={require('./1.png')} style={{height:100,width:100,borderRadius:10,}} />
            </TouchableOpacity>
            <Image source={require('./2.png')} style={{height:100,width:100,borderRadius:10,marginLeft: '2%'}} />
            <Image source={require('./3.png')} style={{height:100,width:100,borderRadius:10,marginLeft: '2%',}} />
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <Image source={require('./4.png')} style={{height:100,width:100,borderRadius:10,marginLeft: '2%'}} />
            <Image source={require('./5.png')} style={{height:100,width:100,borderRadius:10,marginLeft:'2%'}} />
            </View>
            <View>
                <Text style={{left:"3%",fontSize:30,fontWeight:'bold',marginTop:3}}>
                Previous Year Paper
                </Text>  
            </View>
            <View style={{flex:3,marginTop:3,left:"1%",flexDirection: "row",}}>
            <Image source={require('./2019.png')} style={styles.value} />
            <Image source={require('./2018.png')} style={styles.value} />
            <Image source={require('./2017.png')} style={styles.value} />
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <Image source={require('./2016.png')} style={styles.value} />
            <Image source={require('./2015.png')} style={styles.value} />
            <Image source={require('./2014.png')} style={styles.value} />
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <Image source={require('./2013.png')} style={styles.value} />
            <Image source={require('./2012.png')} style={styles.value} />
            <Image source={require('./2011.png')} style={styles.value} />
            </View>
            </ScrollView>
            
        );
    
    }
}

const styles = StyleSheet.create({
    value :{
        height:100,
        width:100,
        borderRadius:10,
        marginLeft: '2%'
    }
    });
