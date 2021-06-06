import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component{

    render(){
        return(
            <View style={{backgroundColor:"#FFF", height:"100%"}}>

                <Image  source={require('../images/image.jpg')}
                style={{width:"100%", height:"50%"}}
                />

                <Text style={{
                    fontSize:24,
                    alignSelf:"center",
                    fontWeight:"bold"
                }}>Save the world</Text>

                <Text style={{
                    marginHorizontal:55,
                    textAlign:"center",
                    marginTop:5,
                    opacity:0.4,
                    fontSize:16
                }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                 Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    marginTop:20,
                    borderWidth:2,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>

                    <TextInput
                    placeholder="Email"
                    placeholderTextColor="#00716F"
                    style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    marginTop:15,
                    borderWidth:2,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <TextInput
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#00716F"
                    style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    marginTop:15,
                    borderWidth:2,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <TextInput
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="#00716F"
                    style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:20,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"#FFF",
                        fontWeight:"bold"
                        }}>Register</Text>
                </View>

            </View>
        );
    }
}