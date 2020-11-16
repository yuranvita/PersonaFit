import  React , { useState} from 'react';
import { StyleSheet, Text, View ,Alert} from 'react-native';
import { RectButton, TextInput  } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';




export default function LoginEmail(){

  const navigation = useNavigation();

  const [email , setEmail] = useState('@gmail.com');
  const [senha , setSenha] = useState('');

  function valida(email){
    Alert.alert(`Bem-Vindo ${email} `);
  }

  async function hundleNavigateHomePage(){

    await valida(email);

    
    navigation.navigate('HomePage');
  }

    return(
      <View style={styles.container}>
        <Text style={styles.SignText}>Sing With Gmail</Text>
        <View style={styles.buttonContainer}>
          
          <RectButton style={styles.ButtonLoginFacebook} onPress={()=>{}}>
            <Text style={styles.TextLogin}>FaceBook</Text>
          </RectButton>
          <RectButton style={styles.ButtonLoginTwitter} onPress={()=>{}}>
            <Text style={styles.TextLogin}>Twitter</Text>
          </RectButton>
        </View>

        <Text style={styles.SignTextOr}>or</Text>
        <TextInput 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        />
        <TextInput 
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        />

        <RectButton style={styles.ButtonLogin} onPress={hundleNavigateHomePage}>
           <Text style={styles.TextLogin}>Sign Up</Text>
        </RectButton>
      
      </View>
      
    );
}




const styles = StyleSheet.create({
    container: {
      marginTop:30,
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
      SignText :{
        justifyContent:'center',
        padding:30,
        paddingRight:140,
        alignItems:"center",
        color:"#fff",
        fontSize: 26,
        
    },
    input :{
      flex:1,
      color:"#FFF",
      backgroundColor:"#555555",
      justifyContent:'center',
      alignItems:'center',
      width:300,
      maxHeight:50,
      borderRadius:26,
      margin:10,
      textAlign:'center'
      
  },
      ButtonLogin:{
        height:55,
        width: 320,
        borderRadius:26,
        backgroundColor:"#FF2244",
        alignItems:"center",
        justifyContent:"center",
        marginTop:34,


      }, SignTextOr :{
        marginBottom:20,
        marginRight:270,
        color:"#fff",
        fontSize: 26
    },

    TextLogin:{

      fontSize:20,
      alignItems:"center",
      color:"#FFF",
      justifyContent:"space-between"
    },

    ButtonLoginFacebook:{
      height:55,
      width: 120,
      marginRight:30,
      borderRadius:26,
      backgroundColor:"#3B5998",
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:15,
      
      

    },

    ButtonLoginTwitter:{
      height:55,
      width: 120,
      marginLeft:30,
      borderRadius:26,
      backgroundColor:"#00ACEE",
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:15,
      
      

    },

    buttonContainer:{
      
      flexDirection:'row',
     
      

    }
     
  });