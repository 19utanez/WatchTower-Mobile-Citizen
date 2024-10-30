import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
    const navigation=useNavigation ();
    const handlelogin= () => {
        navigation.navigate("LOGIN");
    };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO</Text>
        <Text style={styles.title2}>WATCHTOWER</Text>
      <Image source={require("../assets/img1wt.png")} style={styles.logo}/>
      
      
        <TouchableOpacity style={[styles.enterbuttonwrapper]} onPress={handlelogin}>

        <Text style={styles.buttontext1}>ENTER</Text>

        </TouchableOpacity>
     
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.navyblue,
        alignItems: "center",
    },
    logo :{
        height:308,
        width: 270,
        marginVertical: 80,
    },
    title:{
        fontSize: 33,
        fontFamily: fonts.Regular,
        color: colors.white,
        textAlign: "center",
        marginTop: 50
        
    },

    title2:{
        fontSize: 40,
        fontFamily: fonts.Regular,
        color: colors.white,
        textAlign: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.gray,
        width: "75%",
        height: 56,
        borderRadius: 100,
        backgroundColor:colors.darkred,
        alignItems:"center",
        justifyContent:"center",
    
    },
    buttontext1:{
        fontSize: 40,
        color: colors.white,
    },
    enterbuttonwrapper:{
       
            flexDirection: "row",
            borderWidth: 1,
            borderColor: colors.gray,
            width: "75%",
            height: 56,
            borderRadius: 100,
            backgroundColor:colors.darkred,
            alignItems:"center",
            justifyContent:"center",
    },

    
});