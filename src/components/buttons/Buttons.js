import React from 'react'
import { Text, View ,StyleSheet,Pressable} from 'react-native'

 const Buttons=({onPress,text,type="PRIMARY",bgcolor,fgcolor})=> {

    return (
      <Pressable 
      onPress={onPress}  
       style={[styles.container,styles[`container_${type}`],
  bgcolor ? {backgroundColor:bgcolor}:{} 
       ]}>
        <Text
         style={[styles.text,styles[`text_${type}`],
         fgcolor ? {color:fgcolor}:{}
         
         ]} >{text} </Text> 
      </Pressable>
    )
  };

const styles=StyleSheet.create({
    container:{
        // backgroundColor:'#3b71f3',
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    container_PRIMARY:{
backgroundColor:"#3b71f3"
    },
    container_SECONDARY:{
        borderColor:"#3b71f3",
        borderWidth:2
            },
    text:{
        fontWeight:'bold',
        color:"white"
    },
    text_TERTIARY:{
        color:'gray',
        // backgroundColor:"#3b71f3"
            },
            text_SECONDARY:{
                color:'#3b71f3',
                // backgroundColor:"#3b71f3"
                    },
})
export default Buttons
