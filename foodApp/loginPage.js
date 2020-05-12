import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class loginPage extends Component {
  actionSome = ()=> {this.props.navigation.navigate('offersPage');
}

  render() {
    return (

      <View style={{ flex: 1 }} >

        <View style={{ flex: 1, backgroundColor: '#f1f4fa', justifyContent: 'flex-end', alignItems: 'flex-start' }}>

          <Text style={{ textShadowRadius: 1, fontSize: 50, color: '#dcdee7', fontWeight: 'bold' }}>{' LIVE \n FOR \n FOOD'}</Text>

          <View style={{
            justifyContent: 'center', alignItems: 'center', width: '100%',
            position: 'absolute',
            left: 0,
            bottom: 0,
            paddingVertical: 20
          }}>
            <Image style={{ width: 150, height: 150, borderRadius: 125 }}
              source={require('./img/swiggy.jpg')}></Image>
          </View>


        </View>

        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>

          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#484c5c' }} >ACCOUNT</Text>
          <Text style={{ color: '#a5a9ac' }}>Login/Create Account quickly to manage orders</Text>
          <Button style={{ backgroundColor: '#f5841c', marginVertical: 20 }}>
            <Text style={{ padding: 135, fontSize: 15, fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
          </Button>
          <View style={{ height: 2, backgroundColor: 'black' }}></View>

          <View style={{ paddingVertical: 5 }}>
            <TouchableOpacity onPress = {this.actionSome} >
            <View style={{
              height: 70, width: '100%', flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              borderBottomColor:'grey',
              borderBottomWidth:0.5,
            }}>
             
                <Icon name="book" size={30} color="#900" style={{
                width: '10%'
                }} />

              <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>Offers</Text>
                <Icon name="bath" size={30} color="#900" style={{
                width: '10%'
                }} />
              </View>
            </View></TouchableOpacity>
            <TouchableOpacity>
            <View style={{
              height: 70, width: '100%', flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              borderBottomColor:'grey',
              borderBottomWidth:0.5
            }}>
              <Icon name= 'at' size={30} color="#900" style={{
                width: '10%'
                }} />

              <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: 15 }}>Send Feedback</Text>
                  <Text style={{ color: 'gray' }} >App Version 3.25.4(826)</Text>
                </View>
                <Icon name="rocket" size={30} color="#900" style={{
                width: '10%'
                }} />
              </View>
            </View></TouchableOpacity> 
          </View>
        </View>
      </View>
    )
  }
}
