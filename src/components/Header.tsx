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
        navigation.navigate('TrainerPage');
    }
    function hundleGoProfile(){
        navigation.navigate('ProfilePage');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={hundleGoHome}>
                <Entypo name="home" size={40} color="black" />  
            </BorderlessButton>
            <BorderlessButton onPress={hundleGoProgams}>
                <Entypo name="box" size={40} color="black" />
            </BorderlessButton>
            <BorderlessButton onPress={hundleGoTrainers}>
                <FontAwesome name="group" size={35} color="black" />
            </BorderlessButton>
            <BorderlessButton onPress={hundleGoProfile}>
                <Zocial name="persona" size={40} color="black" />
            </BorderlessButton>
                
           
            

            

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginTop:700,
        width:350,
        maxWidth:350,
        marginLeft:20,
        paddingRight:10,
        borderRadius:19,
        backgroundColor : '#f1f1f1',
        height:100,
        maxHeight:60,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        flex : 1,
        position :'absolute'
    },

 
});