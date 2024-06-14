
import { SafeAreaView, StyleSheet, Text, View ,Image,useWindowDimensions,ScrollView} from 'react-native';
import Input from "../../components/input";
import Buttons from '../../components/buttons/Buttons';
import { useState } from 'react';
import SocialIcons from '../../components/SocialMediaIcons/SocialIcons';
import { useNavigation } from '@react-navigation/native';
export default function Register() {
    const [username, setUserName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [passwordReapet, setPasswordRepeat]=useState('');
    const navigation=useNavigation();
    const onRegisterPressed=()=>{
        
        navigation.navigate('ConfirmEmail')
    };
    const signin=()=>{
        
        navigation.navigate('SignIn')
    };
    const onTermesofUse=()=>{
      console.warn('termsof use....')
  };
  const onPrivacyPressed=()=>{
    console.warn('privacy here....')
};

  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
         <Input  
         placeholder="username"
         value={username}
         setValue={setUserName}
         />
           <Input  
         placeholder="email"
         value={email}
         setValue={setEmail}
         />
         <Input   placeholder={"password"} 
         value={password} 
         setValue={setPassword}
        secureTextEntry={true}/>
         <Input   placeholder={"repeat password"} 
         value={passwordReapet} 
         setValue={setPasswordRepeat}
        secureTextEntry={true}/>
        <Buttons  text="Register" onPress={onRegisterPressed}   />
        <Text style={styles.text}>By Registering , you confirm that you accept our terms of <Text style={styles.link} onPress={onTermesofUse}> use </Text> and <Text style={styles.link} onPress={onPrivacyPressed}>privacy policy</Text></Text>
        <SocialIcons/>
        <Buttons text="have an Account? Sign In" onPress={signin} type="TERTIARY"/>
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
    padding:20,
    
  },
  logo:{
    width:"70%",
    maxWidth:"300",
    maxHeight:'200'
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#051c60',
    marginBottom:30,
    marginTop:50,

  },
  text:{
color:'gray',
marginVertical:10
  },
  link:{
    color:'#fdb075'
  },
});
