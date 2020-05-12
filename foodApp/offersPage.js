import React, { Component } from 'react';
import { View,Text,Image} from 'react-native';
import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

 class offersPage extends Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image style = {{height:200,width:200}}
                source = {require('./img/swiggy1.png')}>
                </Image>
                 <Text style={{textAlign:'center',fontSize:15,paddingVertical:10,fontWeight:'bold',color:'#5f6371'}}>NO OFFERS</Text>
                <Text style = {{textAlign:'center',paddingBottom:200,fontSize:13,color:'#b3b5bc'}}>{'Sorry! No restaurants seriviceable at the moment\nplease check back later'}</Text>
               </View>
        )
    }
}

 class offersPage1 extends Component {
  
    render() {
        return (

            <View>

                <View style={{width: 400, height: 50, backgroundColor: '#f4f4f5', justifyContent: 'center' }}><Text>AVAILABLE COUPONS</Text></View>
                
                    <Text style = {{paddingVertical:15,fontSize:15,fontWeight:'bold',color:'#5a5c6b'}}>Get 15% discounts using Standard Chartered...</Text>

                    <View style={{ backgroundColor: '#a7a9b0', height: 1}}></View>

                    <Text style = {{paddingTop:15,color:'#9a9ca5'}}>Use code SCB100 & get 15% discount up to Rs.100 on orders above Rs.500</Text>
                    <Text style = {{paddingVertical:10,color:'blue'}}> +more</Text>
                    

                <View style={{backgroundColor: '#a7a9b0', height: 1,justifyContent:'center' }}></View>

                <Text style = {{paddingVertical:15,fontSize:15,fontWeight:'bold',color:'#5a5c6b'}}>Get assured instant cashback up to Rs.150</Text>
                <View style={{backgroundColor: '#a7a9b0', height: 1,justifyContent:'center' }}></View>
                    
                    <Text style = {{paddingTop:15,color:'#9a9ca5'}}>Use code PAYPAL150 & get assured instant cashback from Rs.15 up to Rs.150 on first ever transaction using PayPal</Text>
                    <Text style ={{paddingVertical:10,color:'blue'}}> +more</Text>

                    <View style={{ backgroundColor: '#a7a9b0', height: 1}}></View>

                    <Text style = {{paddingVertical:15,fontSize:15,fontWeight:'bold',color:'#5a5c6b'}}>Get 15% discounts using Standard Chartered...</Text>

                <View style={{ backgroundColor: '#a7a9b0', height: 1 }}></View>

                <Text style = {{paddingTop:15,color:'#9a9ca5'}}>Use code SCB100 & get 15% discount up to Rs.100 on orders above Rs.500</Text>
                    <Text style = {{paddingVertical:10,color:'blue'}}> +more</Text>
                    
               <View style={{ backgroundColor: '#a7a9b0', height: 1 }}></View>
               <Text style = {{paddingVertical:15,fontSize:15,fontWeight:'bold',color:'#5a5c6b'}}>Get assured instant cashback up to Rs.150</Text>

                    <View style={{ backgroundColor: '#a7a9b0', height: 1 }}></View>


                    <Text style = {{paddingTop:15,color:'#9a9ca5'}}>Use code PAYPAL150 & get assured instant cashback from Rs.15 up to Rs.150 on first ever transaction using PayPal</Text>
                    <Text style ={{paddingVertical:10,color:'blue'}}> +more</Text>

                    <View style={{ backgroundColor: '#a7a9b0', height: 1}}></View>
            </View>
        )
    }
       
}
const Tab = createBottomTabNavigator();

class offersTabs extends Component{
    render(){
        return(
    //         <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={offersPage} />
    //     <Tab.Screen name="Settings" component={offersPage1} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          }else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={offersPage} />
      <Tab.Screen name="Settings" component={offersPage1} />
    </Tab.Navigator>
  </NavigationContainer>

    
        )
    }
}
export default offersTabs
