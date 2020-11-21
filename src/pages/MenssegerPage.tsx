import React ,{useState} from 'react';

 
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {Text , View , ScrollView , StyleSheet , Image} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';



export default function HomePage(){

    const [menssenger , setMenssenger] = useState('');
    
    function hundleSubimit(){
        console.log(menssenger);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.Header}>Menssenger</Text>
            <ScrollView style={styles.content}>
                <View style={styles.containerProfessor}>
                    <Text style={styles.idProfessor}>Bruno Guimarães</Text>
                    <View style={styles.boxIDprofessor}>
                        <Text style={styles.textMenssenger}>
                            Vai subir nas árvores o caralho
                        </Text>
                    </View>
                </View>
                <View style={styles.containerAluno}>
                    <Text style={styles.idAluno}>Yuran Vita</Text>
                    <View style={styles.boxIDprofessor}>
                        <Text style={styles.textMenssenger}>
                            É 13 MEMO PORRA 
                        </Text>
                    </View>
                </View>
               
            </ScrollView>
            <View style={styles.containerInput}>
                    <TextInput style={styles.input} placeholder='Digite Sua Mensagem' value={menssenger} onChangeText={setMenssenger}/>
                    <RectButton onPress={hundleSubimit}>
                        <FontAwesome name="send-o" size={24} color="black" style={styles.send} />
                    </RectButton>
            </View>
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
    boxIDprofessor:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fdfdfd',
        borderRadius:26,
        maxHeight:600,
        maxWidth:360,
    },
    idProfessor:{
        marginLeft:20,
        color:'#FFF',
        fontSize:20,

    },
    containerProfessor:{
        marginTop:10,
        justifyContent:'space-between',
        alignItems:'flex-start',
        marginLeft:10,
    },
    textMenssenger:{
        padding:10,
        justifyContent:"center",
        alignItems:'flex-start',
        fontSize:15,
        color:'#111111',
        
    },
    containerAluno:{
        marginTop:10,
        alignItems:'flex-end',
        justifyContent:'center',

    },
    idAluno:{
        marginRight:20,
        color:'#FFF422',
        fontSize:20,
        justifyContent:'flex-end'
    },
    input:{
        borderRadius:26,
        width:320,
        height:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:30,
    },
    containerInput:{
        borderRadius:50,
     
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#1f1f1f',
        width:390,
        maxWidth:390,
        height:50,
        maxHeight:50,
        padding:20,


        
    },
    send:{
        color:'#FFF'
    }
 
  


})