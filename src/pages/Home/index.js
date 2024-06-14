import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={styles.home}>this is Asli Group With Tech And Arch</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  home:{
    fontSize:30,
    justifyContent:'center',
    alignItems:'center',
  }
})
export default index