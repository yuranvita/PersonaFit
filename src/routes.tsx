import React from 'react';

import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const { Navigator , Screen} = createStackNavigator();

import LoginPage from './pages/LoginPage';
import LoginEmail from './pages/LoginEmail';

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown : false , cardStyle : {backgroundColor:'#f2f3f5'}}}>
                <Screen name="LoginPage" component={LoginPage}/>
                <Screen name="LoginEmail" component={LoginEmail}/>
            </Navigator>
        </NavigationContainer>
    );
}
