import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';





export default function LoginPage(){
    return(
      <View style={styles.container}>
        <Text style={styles.SignText}>
          Sing With Gmail
        </Text>

        <RectButton style={styles.ButtonLogin} onPress={()=>{}}>
           <Text style={styles.TextLogin}>Email</Text>
        </RectButton>

        <Text style={styles.SignTextOr}>
          or
        </Text>
        <View style={styles.buttonContainer}>
          <RectButton style={styles.ButtonLoginFacebook} onPress={()=>{}}>
            <Text style={styles.TextLogin}>FaceBook</Text>
          </RectButton>
          <RectButton style={styles.ButtonLoginTwitter} onPress={()=>{}}>
            <Text style={styles.TextLogin}>Twitter</Text>
          </RectButton>
        </View>
      
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
        paddingRight: 110,
        color:"#fff",
        fontSize: 26
    },
      ButtonLogin:{
        height:55,
        width: 320,
        borderRadius:26,
        backgroundColor:"#FF2244",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:30


      }, SignTextOr :{
        paddingTop:30,
        paddingRight:270,
        color:"#fff",
        fontSize: 26
    },

    TextLogin:{

      fontSize:20,
      paddingBottom:34,
      alignItems:"center",
      color:"#FFF"
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
      marginTop:30,
      flexDirection:'row',
      justifyContent:'space-between',


    }
     
  });