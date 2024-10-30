import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/Ionicons";

import { useNavigation } from '@react-navigation/native';

import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const LoginScreen = () => {

  const navigation=useNavigation ();
  const backnav= () => {
      navigation.navigate("HOME");
    };
  
   const loginbutnav= () => {
      navigation.navigate("INSIDE");
    };

  const signupbutton=() => {
    navigation.navigate("REGISTER")
  };

  const [secureTextEntry, setSecureEntrty] = useState(true);

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton} onPress={backnav}>
        <Ionicons name={"chevron-back"} color={colors.gray} size={50}/>
      </TouchableOpacity>
      
      <View style={styles.textcontainer1}>

      <Image source={require("../assets/img1wt.png")} style={styles.logo}/>
      
        <Text style={styles.text1}>
            Login
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
            <Ionicons name={"mail-outline"} size={45} color={colors.gray}/>
            <TextInput style={styles.txtinput} placeholder='Enter your email' placeholderTextColor={colors.gray} keyboardType='email-address'/>

        </View> 
        <View style={styles.inputContainer}>
            <SimpleLineIcons name={"key"} size={45} color={colors.gray}/>
            <TextInput style={styles.txtinput} placeholder='Enter your password' placeholderTextColor={colors.gray} secureTextEntry={secureTextEntry}/>
           
            <TouchableOpacity onPress={() => {
              setSecureEntrty((prev) => !prev);
            }}>
            <SimpleLineIcons name={"eye"} size={25} color={colors.gray}/>
            </TouchableOpacity>
        
        </View>
    
      <TouchableOpacity>
        <Text style={styles.forgotpass}>Forgot password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginButton}onPress={loginbutnav}>
      <Text style={styles.logintxt}>LOGIN</Text>
    </TouchableOpacity>

    <Text style={styles.continuetxt}>or continue with</Text>

    <TouchableOpacity style={styles.googlebuttonContainer}>
      <Image source={require("../assets/googleicon.png")} style={styles.googleimg}/>
            <Text style={styles.googletxt}> Google</Text>
    </TouchableOpacity>
    
    <View style={styles.footerContainer}>
      <Text style={styles.dacctxt}>Don't have an account?</Text> 
      <TouchableOpacity onPress={signupbutton}>
      <Text style={styles.signuptxt}>Sign up</Text>
      </TouchableOpacity>
      
    </View>
      </View>
    </View>
  )
}


export default LoginScreen

const styles = StyleSheet.create({

   logo :{
        height:120,
        width: 100,
        marginVertical: 35,
        marginBottom: 20,
        marginLeft: 130,
  },

    container:{
        flex: 1,
        backgroundColor:colors.navyblue,

    },
    backbutton:{
        marginLeft: 13,
        marginTop: 20,
        
    },

    textcontainer1:{
        marginVertical: 5,
        marginLeft: 14,
    },
    text1:{
        fontSize:45,
        fontFamily: fonts.Bold,
        color: colors.white,
        marginTop: 40,
    },

    formContainer:{
        marginTop:1,
    },

    inputContainer:{
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 100,
        padding: 2,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 13,
    
        
    },
    txtinput:{
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
        color: colors.white,
    },


    forgotpass:{
      textAlign:"right",
      color: colors.white,
      fontFamily: fonts.SemiBold,
    },
    loginButton:{
      backgroundColor: colors.darkred,  
      borderRadius:50,  
      marginVertical: 25,

    },
    logintxt:{
      color: colors.white,
      fontSize: 30,
      fontFamily: fonts.SemiBold,
      textAlign: "center",
      padding: 8,
    },

    continuetxt: {
      textAlign:"center",
      fontSize: 17,
      fontFamily: fonts.Regular,
      color: colors.white,
    },

    googlebuttonContainer:{
      flexDirection:"row",
      borderWidth: 2,
      borderColor: colors.gray,
      borderRadius: 100,
      justifyContent:"center",
      alignItems:"center",
      padding: 3,
      marginTop: 15,
    },

    googleimg: {
      height:45,
      width:40,
    },

    googletxt:{
      fontSize: 30,
      color: colors.gray,
      fontFamily: fonts.SemiBold,
    },

    footerContainer:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginVertical: 15,
      gap: 8,
    },
    
    dacctxt:{
      color: colors.gray,
      fontFamily: fonts.Regular,
    },

    signuptxt:{
      color: colors.white,
      fontFamily: fonts.SemiBold
    },
});