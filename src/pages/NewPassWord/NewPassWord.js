
import { SafeAreaView, StyleSheet, Text, View ,Image,useWindowDimensions,ScrollView} from 'react-native';
import Input from "../../components/input";
import Buttons from '../../components/buttons/Buttons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function NewPassWord() {
    const [username, setUserName]=useState('');
    const [newpassword, setNewPassword]=useState('');
    const navigation=useNavigation();
    
    const signin=()=>{
        navigation.navigate('SignIn')
    };
    const onSubmitPressed=()=>{
      navigation.navigate('Home');
  };
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <Input   placeholder={"username "} 
         value={username} 
         setValue={setUserName}
        secureTextEntry={true}/>
        <Input   placeholder={"enter a new password"} 
         value={newpassword} 
         setValue={setNewPassword}
        secureTextEntry={true}/>
        <Buttons  text="submit" onPress={onSubmitPressed}   />
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
