
import { SafeAreaView, StyleSheet, Text, View ,Image,useWindowDimensions,ScrollView} from 'react-native';
import logo from "../../../assets/l2.png";
import Input from "../../components/input";
import Buttons from '../../components/buttons/Buttons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Signup() {
    const [username, setUserName]=useState('');
    const [password, setPassword]=useState('');
    const {height}=useWindowDimensions();
    const navigation=useNavigation();
    const onSignInPressed=()=>{
        
        // first check if its  valid
        navigation.navigate('Home')
    };
    const onSignWithFacebookInPressed=()=>{
        
        navigation.navigate('Home')
    };
    const onSignInWithGooglePressed=()=>{
        
        navigation.navigate('Home')
    };
    const onSignInWithApplePressed=()=>{
        console.warn('SignIn with Apple')
        navigation.navigate('Home')
    };
    const onForgotPasswordPressed=()=>{
        navigation.navigate('ForgotPassword')
    };
    const signup=()=>{
        navigation.navigate('SignUp')
    };
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Image  
        source={logo}
         style={[styles.logo,{height:height*0.3}]}
         resizeMode='contain'/>
         <Input  
         placeholder="username"
         value={username}
         setValue={setUserName}
         />
         <Input   placeholder={"password"} 
         value={password} 
         setValue={setPassword}
        secureTextEntry={true}/>
        <Buttons  text="Sign In" onPress={onSignInPressed}   />
        <Buttons text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
        <Buttons  text="Sign In With FaceBook" onPress={onSignWithFacebookInPressed} bgcolor='#e7eaf4' fgcolor='#4765a9'  />
        <Buttons  text="Sign In With Google" onPress={onSignInWithGooglePressed} bgcolor='#fae9ea' fgcolor='#dd4d44'  />
        <Buttons  text="Sign In With Apple" onPress={onSignInWithApplePressed}  bgcolor='#e3e3e3' fgcolor='#363636' />
        <Buttons text="Dont have an Account? Create One" onPress={signup} type="TERTIARY"/>
      {/* <Text>signUp</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f9fbfc',
    alignItems:"center",
    padding:20
  },
  logo:{
    width:"100%",
    maxWidth:400,
    maxHeight:200
  }
});
