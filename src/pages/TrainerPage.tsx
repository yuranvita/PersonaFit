import React, { useState }  from 'react';



import {RectButton, TextInput} from 'react-native-gesture-handler';
import {Text , View , ScrollView , StyleSheet , Image} from 'react-native';

import imagem from '../images/Rectangle27.png';



import { AntDesign } from '@expo/vector-icons'; 



export default function HomePage(){
    

    
  
    

    const [category , setCategory] = useState('');
   
 

    
   async function Category(Evento){

    
    console.log(Evento)

    await setCategory( category ?any =>Evento : String =>{  setCategory(Evento)});    
    
    }
   
   
    return(
        <View style={styles.container}>
            <Text style={styles.home}>Trainrs</Text>
            <ScrollView style={styles.content} nativeID="nome">
                <Text style={styles.titlle} >Choose Category</Text>
                <ScrollView horizontal pagingEnabled style={styles.boxCategory}>
                    <RectButton  style={styles.category}   onPress={()=>{
                        Category("Leg") ; 
                    }}>
                        <Text style={styles.categoryText}>Leg</Text>
                    </RectButton>
                    <RectButton style={styles.category} onPress={()=>{
                        Category("Pilates")
                    }}>
                        <Text style={styles.categoryText}>Pilates</Text>
                    </RectButton>
                    <RectButton style={styles.category} onPress={()=>{
                        Category("BodyBuilder")
                    }}>
                        <Text style={styles.categoryText}>BodyBuilder</Text>
                    </RectButton>
                    <RectButton style={styles.category} onPress={()=>{
                        Category("Yoga")
                    }}>
                        <Text style={styles.categoryText}>Yoga</Text>
                    </RectButton>
                    <RectButton style={styles.category} onPress={()=>{
                        Category("CrossFit")
                    }}>
                        <Text style={styles.categoryText}>CrossFit</Text>
                    </RectButton>
                </ScrollView>
               <View style={styles.box}>
                   <Image style={styles.image}  source={imagem}/>
                    <Text style={styles.description}>
                        leg's matinal hard training
                    </Text>
                    <RectButton style={styles.boxButton} >
                        <AntDesign name="playcircleo" size={24} color="black" style={styles.button} />
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
    home:{
        alignContent:'center',
        fontSize:28,
        color:'#FFFFFF'
    },
    content:{   
        backgroundColor:'#333333',
        width:'100%',
        borderRadius:26,
    },
    box:{
        marginLeft:9,
        marginTop:30,
        height:160,
        maxWidth:380,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#555555',
        borderRadius:27,
        flexDirection:'row',
        

    },
    titlle:{
        marginTop:20,
        marginLeft:20,
        color:'#FFF',
        fontSize:25,
    },
    category:{
        shadowRadius:20,
        marginTop:10,
        backgroundColor: '#555555',
        height:30,
        width:85,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:26,
        marginLeft:20,
        
    },
    categoryText:{
        display:'flex',
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    boxCategory:{
        flexDirection:'row',
        margin:10,
    },
    image:{
        maxHeight:100,
        maxWidth:150,
        marginRight:10,
        marginBottom:40,
        marginLeft:10,
        position:'relative'

    },
    description:{
        justifyContent:'center',
        color:'#FFF',
        fontSize:20,
        marginBottom:70,
        flexDirection:'column',
        marginRight:20,
        maxWidth:150,
    },
    button:{
       fontSize:40,
       
        
    },
    boxButton:{
        height:50,
        width:50,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
        marginVertical:-60,
        flexDirection:'row'
    }

})