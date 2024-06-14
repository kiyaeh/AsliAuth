// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SignUp/> */}
      {/* <Register/> */}
      {/* <ConfirmEmail/> */}
      {/* <ForgetPass/> */}
      {/* <NewPassWord/> */}
      <Navigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
    
  },
});
