
import { SafeAreaView, StyleSheet, Text, View ,Image,useWindowDimensions,ScrollView} from 'react-native';
import Input from "../../components/input";
import Buttons from '../../components/buttons/Buttons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
export default function ConfirmEmail() {
    const [code, setCode]=useState('');
    const navigation=useNavigation();
     const onConfirmPressed=()=>{
        navigation.navigate('Home')
    };
    const signin=()=>{
        navigation.navigate('SignIn');

    };
  const OnresendButton=()=>{
    console.warn('resend button....')
};

  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email Address</Text>
         
         <Input   placeholder={"Enter your confirmation Code"} 
         value={code} 
         setValue={setCode}
        secureTextEntry={true}/>
        <Buttons  text="confirm" onPress={onConfirmPressed}   />
        <Buttons text="Resend Code" onPress={OnresendButton} type="SECONDARY"/>
        <Buttons text="Back to sign In" onPress={signin} type="TERTIARY"/>
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
