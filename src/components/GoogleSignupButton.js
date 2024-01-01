import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const GoogleSignupButton = () => {

  const onsuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log(decoded);
  }

  const onfail = (err) => {
    console.log('Login Failed'+err);
  }


  return (
    <div style={{
      position:'relative',
      top: '13vw',
      width: '90%',
      left: '5%'
    }}>
      <GoogleLogin
        onSuccess={onsuccess}
        onError={onfail}
      />
      
    </div>
  )
}

export default GoogleSignupButton
