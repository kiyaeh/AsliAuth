import { View, Text,Image ,StyleSheet,SafeAreaView} from 'react-native'
import banner from '../../../assets/l2.png'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView>
      <Text style={styles.home}>This is for <Text style={styles.link}>Asli Group With Tech And Arch</Text> Home Screen</Text>
      <Image style={styles.img} source={banner}/>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  home:{
    fontSize:30,
    justifyContent:'center',
    alignItems:"center",
    padding:40
  },
  img:{
    width:"100%",
    maxWidth:400,
    maxHeight:200,
    justifyContent:'center',
  },
  link:{
    color:"orange",
    
  }
})
export default index