// RegistrationPage.js

import React from 'react';
import GoogleSignupButton from '../components/GoogleSignupButton';

const RegistrationPage = () => {
  const handleGoogleSignupSuccess = (response) => {
    console.log('Google Signup Success:', response);
    // Handle successful Google signup
  };

  const handleGoogleSignupFailure = (error) => {
    console.error('Google Signup Failure:', error);
    // Handle Google signup failure
  };

  return (
    <div>
      <h2>Registration Page</h2>
      {/* Your other registration form fields go here */}
      <GoogleSignupButton
        onGoogleSignupSuccess={handleGoogleSignupSuccess}
        onGoogleSignupFailure={handleGoogleSignupFailure}
      />
    </div>
  );
};

export default RegistrationPage;
