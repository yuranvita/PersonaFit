import React  from 'react';



import {Rating , AirbnbRating } from 'react-native-ratings'
 
import {RectButton} from 'react-native-gesture-handler';
import {Text , View , ScrollView , StyleSheet , Image} from 'react-native';

import imagem from '../images/Rectangle24.png';


export default function HomePage(){

    


    return(
        <View style={styles.container}>
            <Text style={styles.Header}>Programs</Text>
            <ScrollView style={styles.content}>
                <View style={styles.box}>
                    <Text style={styles.release}>New Release</Text>
                    <Text style={styles.more}>More</Text>
                </View>
                <View style={styles.boxImage}>
                    <Image 
                        style={styles.image}
                        source={imagem}/>
                    
                </View>
                <View style={styles.box_category}>
                    <Text style={styles.release}>Categories</Text>
                    <View style={styles.image}>
                        <Image source={imagem}/>
                        <View style={styles.box_category_review}>
                            <Text style={styles.details}>Weigth Loss</Text>
                            <Text style={styles.details}>115 Reviews</Text>
                        </View>
                    </View>   
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
    image:{
        marginTop:20,
        height:200,
        width:310,
        flexDirection:'row',

    },
    boxImage:{
        marginTop:15,
        marginLeft:25,
        maxHeight:200,
        maxWidth:350,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    box:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    more:{
        marginRight:30,
        marginTop:10,
        color:'#FF1111',
        fontSize:18,
    },
    release:{
        color:'#FFF',
        marginLeft:30,
        marginTop:10,
        fontSize:18,
    },
    box_category:{
        marginTop:30,
        marginLeft:30,
        
    },
    details:{
        color:'#FFF',
        fontSize:20,
        marginLeft:20,
        marginTop:20,
        flexDirection:'column'
    },
    box_category_review:{
        flexDirection:'column',
        
        
    },


})