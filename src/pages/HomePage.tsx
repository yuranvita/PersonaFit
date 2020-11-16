import React  from 'react';
import ReactDOM from 'react-dom';


import {Rating , AirbnbRating } from 'react-native-ratings'
 



import {RectButton} from 'react-native-gesture-handler';
import {Text , View , ScrollView , StyleSheet , Image} from 'react-native';

import imagem from '../images/image8.png';


export default function HomePage(){

    const value = 2;

    const nome = '@bodyBuilder';
    const discription = "Body , Builder";
    


    return(
        <View style={styles.container}>
            <Text style={styles.home} >Home</Text>
            <ScrollView style={styles.content}>
                <View style={styles.box}>
                    <View style={styles.box_container}>
                        <Image 
                        style={styles.image}
                        source={imagem}/>
                        <Text style={styles.box_text}>R$ 200</Text>
                    </View>
                    <View style={styles.box_container}>
                        <Text style={styles.box_text_d}>{nome}</Text>
                        <Text style={styles.box_text_d}>{discription}</Text>
                    </View>
                    <View style={styles.box_container}>
                        <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Bad", "Hmm...","VeryGood", "Jesus"]}
                        starStyle={styles.rating}
                        isDisabled={false}
                        size={10}
                        />
                        <RectButton style={styles.buyButton}>
                            <Text style={styles.box_text}>Buy</Text>
                        </RectButton>
                    </View>
                </View>
            </ScrollView>
        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#555555'
    },
    home:{
        alignContent:'center',
        fontSize:28
    },
    content:{   
        backgroundColor:'#333333',
        width:'100%',
        borderRadius:26,
    },
    box:{
        flex:1,
        marginLeft:30,
        marginTop:50,
        height:160,
        width:300,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#555555',
        flexDirection:'row',
        borderRadius:26
    },
    buyButton:{
        marginTop:40,
        borderRadius:26,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF2244',
        height:40,
        width:80,
        marginRight:15
        
    },
    image:{
        borderRadius:15,
        width:70,
        height:60,
        marginBottom:60,
        justifyContent:'center',
        alignItems:'center',

    },
    box_text:{
        color:'#FFF',
        alignItems:'center',
        marginLeft:5,
    },
    box_container:{
        maxWidth:140,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    box_text_d:{
        color:'#FFF',
        alignItems:'center',
        marginRight:30,
        
    },
    rating:{
        marginBottom:10
    }


})