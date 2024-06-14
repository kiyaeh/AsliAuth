
import { SafeAreaView, StyleSheet, Text, View ,Image,useWindowDimensions,ScrollView} from 'react-native';
import Input from "../../components/input";
import Buttons from '../../components/buttons/Buttons';
import { useState } from 'react';
import register from '../register';
import { useNavigation } from '@react-navigation/native';
export default function ForgetPass() {
    const [username, setUserName]=useState('');
    const navigation=useNavigation();

    const signin=()=>{
        navigation.navigate('SignIn')
    };
    const onSendPressed=()=>{
      navigation.navigate('NewPassword')
  };
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <Input   placeholder={"username "} 
         value={username} 
         setValue={setUserName}
        secureTextEntry={true}/>
        <Buttons  text="send" onPress={onSendPressed}   />
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
