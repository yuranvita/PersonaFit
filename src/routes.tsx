import React from 'react';

import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const { Navigator , Screen} = createStackNavigator();

import LoginPage from './pages/LoginPage';
import LoginEmail from './pages/LoginEmail';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ProgramsPage from './pages/ProgramsPage';
import TrainerPage from './pages/TrainerPage';


export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown : false , cardStyle : {backgroundColor:'#f2f3f5'}}}>
                <Screen name="LoginPage" component={LoginPage}/>
                <Screen name="LoginEmail" component={LoginEmail}/>
                <Screen name="HomePage" component={HomePage} options={{ headerShown:true, header :()=> <Header/>}}/>
                <Screen name="ProgramsPage" component={ProgramsPage} options={{ headerShown:true, header :()=> <Header/>}}/>
                <Screen name="TrainerPage" component={TrainerPage} options={{ headerShown:true, header :()=> <Header/>}}/>
            </Navigator>
        </NavigationContainer>
    );
}
