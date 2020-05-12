import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, TabNavigator} from 'react-navigation';
import loginPage from './loginPage';
import offersTabs from './offersPage';
import offersPage from './offersPage';
import cartPage from './cartPage';

const offerspageNavigator = createStackNavigator({
   
loginPage:{screen:loginPage},
offersPage:{screen:offersPage},
offersTabs:{screen:offersTabs},
cartPage:{screen:cartPage},

loginPage:{
    screen:loginPage,
    navigationOptions:{header:null}
},
},

{
    initialRouteName:'loginPage' 
},
)
 export default createAppContainer(offerspageNavigator);
