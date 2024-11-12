import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/Ionicons";
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const Registration = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureEntry] = useState(true);

  const backnav = () => {
    navigation.navigate("LOGIN");
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', { email, password });
      Alert.alert("Success", response.data.message);
      navigation.navigate("LOGIN");
    } catch (error) {
      Alert.alert("Error", error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton} onPress={backnav}>
        <Ionicons name={"chevron-back"} color={colors.gray} size={50}/>
      </TouchableOpacity>
      
      <View style={styles.textcontainer1}>
        <Image source={require("../assets/profile.png")} style={styles.logo}/>
        <Text style={styles.text1}>Create an account</Text>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={45} color={colors.gray}/>
          <TextInput
            style={styles.txtinput}
            placeholder="Enter your email"
            placeholderTextColor={colors.gray}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <SimpleLineIcons name={"key"} size={45} color={colors.gray}/>
          <TextInput
            style={styles.txtinput}
            placeholder="Enter your password"
            placeholderTextColor={colors.gray}
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureEntry(prev => !prev)}>
            <SimpleLineIcons name={"eye"} size={25} color={colors.gray}/>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <SimpleLineIcons name={"key"} size={45} color={colors.gray}/>
          <TextInput
            style={styles.txtinput}
            placeholder="Confirm your password"
            placeholderTextColor={colors.gray}
            secureTextEntry={secureTextEntry}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setSecureEntry(prev => !prev)}>
            <SimpleLineIcons name={"eye"} size={25} color={colors.gray}/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.logintxt}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  logo: {
    height: 120,
    width: 120,
    marginVertical: 35,
    marginBottom: 20,
    marginLeft: 130,
  },
  container: {
    flex: 1,
    backgroundColor: colors.navyblue,
  },
  backbutton: {
    marginLeft: 13,
    marginTop: 20,
  },
  textcontainer1: {
    marginVertical: 5,
    marginLeft: 14,
  },
  text1: {
    fontSize: 45,
    fontFamily: fonts.Bold,
    color: colors.white,
    marginTop: 40,
  },
  formContainer: {
    marginTop: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 100,
    padding: 2,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 13,
  },
  txtinput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
    color: colors.white,
  },
  loginButton: {
    backgroundColor: colors.darkred,  
    borderRadius: 50,  
    marginVertical: 25,
  },
  logintxt: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    padding: 8,
  },
});
