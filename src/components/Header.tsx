import React from 'react';
import { View , StyleSheet } from 'react-native';



import { BorderlessButton } from 'react-native-gesture-handler';
import { Zocial } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';






export default function Header(){
    const navigation = useNavigation();

    function hundleGoHome(){
        navigation.navigate('HomePage');
    }
    function hundleGoProgams(){
        navigation.navigate('ProgramsPage');
    }
    function hundleGoTrainers(){
        navigation.navigate('LoginEmail');
    }
    function hundleGoProfile(){
        navigation.navigate('LoginEmail');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={hundleGoHome}>
                <Entypo name="home" size={40} color="black" />  
            </BorderlessButton>
            <BorderlessButton onPress={hundleGoProgams}>
                <Entypo name="box" size={40} color="black" />
            </BorderlessButton>
            <BorderlessButton>
                <FontAwesome name="group" size={35} color="black" />
            </BorderlessButton>
            <BorderlessButton>
                <Zocial name="persona" size={40} color="black" />
            </BorderlessButton>
                
           
            

            

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginTop:680,
        width:350,
        marginLeft:20,
        paddingRight:10,
        borderRadius:19,
        backgroundColor : '#f1f1f1',
        height:60,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        flex : 1,
        position :'absolute'
    },

 
});