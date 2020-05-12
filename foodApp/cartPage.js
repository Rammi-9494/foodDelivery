import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {Button} from 'native-base'



export default class cartPage extends Component {
    render() {
        return (

            <View>
                <View style={{ paddingTop: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ height: 230, width: 230 }}
                        source={require('./img/cart.png')}></Image></View>
                <Text style={{ textAlign: 'center', paddingVertical: 10, fontWeight: 'bold',color:'#565a69' }}>GOOD FOOD IS ALWAYS COOKING</Text>
                <Text style={{ textAlign: 'center',color:'#b9bbc1' }}>Your cart is empty </Text>
                <Text style={{ textAlign: 'center',color:'#b9bbc1' }}>Add some thing from the menu </Text>
               {/* </View>/ <View style = {{paddingVertical:15,paddingHorizontal: 80,}}>
                    <TouchableHighlight>
                    <Button
                        title="BROWSE RESTAURANTS"
                        color="#FE434C" /></TouchableHighlight></View>  */}
            <View style = {{paddingHorizontal:80,paddingVertical:20}}>         
         <Button bordered warning>
            <Text style = {{color:'#fc8a2c',paddingStart:20,fontWeight:'bold'}}>BROWSE RESTAURANTS</Text>
          </Button></View>

            </View>
        )
    }
}