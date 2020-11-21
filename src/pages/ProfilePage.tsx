import React  from 'react';

 
import {RectButton} from 'react-native-gesture-handler';
import {Text , View , ScrollView , StyleSheet , Image} from 'react-native';

import imagem from '../images/Rectangle24.png';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
export default function HomePage(){
    const navigation = useNavigation();


    function hundleNavigateMensenger(){
        navigation.navigate('MenssengerPage')
    }
    


    return(
        <View style={styles.container}>
            <Text style={styles.Header}>Profile</Text>
            <ScrollView style={styles.content}>
                <View style={styles.boxImage}>
                    <Image 
                    style={styles.imageUsuario}
                    source={imagem}/>
                    <View style={styles.boxID}>
                    <Text style={styles.user}>Yuran Vita</Text>
                    <Text style={styles.userID}>@yuran_vita</Text>
                    </View>
                </View>
                <View style={styles.boxTrainrs}>
                    <View style={styles.infoTrainrs}>
                        <Text style={styles.textPrograms}>My Programs</Text>
                        <Text style={styles.textPrograms}>1</Text>
                    </View>
                    <View style={styles.infoTrainrs}>
                        <Text style={styles.textPrograms}>My Trainrs</Text>
                        <Text style={styles.textPrograms}>0</Text>
                    </View>
                </View>
                <View style={styles.programsContainer}>
                    <RectButton style={styles.buttonMessage} onPress={hundleNavigateMensenger} >
                    <View style={styles.boxPrograms}>
                        <Image
                        source={imagem}
                        />
                        <Text style={styles.userID}>@bruno_Guimarães</Text>
                        <Text style={styles.userID}> Body Builder</Text>
                    </View>
                        <AntDesign name="message1" size={24} color="black" style={styles.menssage}/>
                    </RectButton>
                </View>
            </ScrollView>
        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#555555'
    },
    Header:{
        alignContent:'center',
        fontSize:28,
        color:'#FFFFFF'
    },
    content:{   
        backgroundColor:'#333333',
        width:'100%',
        borderRadius:26,
    },
    imageUsuario:{
        marginTop:20,
        height:100,
        width:100,
        

    },
    boxImage:{
        marginTop:15,
        marginLeft:25,
        maxHeight:200,
        maxWidth:350,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
       
    },
    user:{
        color:'#FFF',
        fontSize:30
    },
    userID:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        color:'#FFF'
    },
    boxID:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    },
    boxTrainrs:{
        paddingHorizontal:20,
        marginTop:100,
        backgroundColor:'#555555',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:100,
    },
    infoTrainrs:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        
    },
    textPrograms:{
        color:'#FFF',
        fontSize:25
    },
    boxPrograms:{
        flexDirection:'column',
        height:200,
        width:300,
        alignContent:'center',
        justifyContent:'flex-end',


    },
    programsContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'

    },
    buttonMessage:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
        
    },
    menssage:{
        marginRight:30,
        color:'#FFF',
        fontSize:30
    }
  


})