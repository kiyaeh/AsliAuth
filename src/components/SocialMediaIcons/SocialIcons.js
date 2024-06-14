import { View, Text } from 'react-native'
import React from 'react'
import Buttons from '../buttons/Buttons'
const SocialIcons = () => {
    const onSignWithFacebookInPressed=()=>{
        console.warn('SignInwith Facebook')
    };
    const onSignInWithGooglePressed=()=>{
        console.warn('SignInWith google')
    };
    const onSignInWithApplePressed=()=>{
        console.warn('SignIn with Apple')
    };
  return (
    <>
        <Buttons  text="Sign In With FaceBook" onPress={onSignWithFacebookInPressed} bgcolor='#e7eaf4' fgcolor='#4765a9'  />
        <Buttons  text="Sign In With Google" onPress={onSignInWithGooglePressed} bgcolor='#fae9ea' fgcolor='#dd4d44'  />
        <Buttons  text="Sign In With Apple" onPress={onSignInWithApplePressed}  bgcolor='#e3e3e3' fgcolor='#363636' />
    </>
  )
}

export default SocialIcons