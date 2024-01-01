import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import Store from './store.js';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="651964537605-01nv0u5bvf40di9klhb1f1c0fsbggml8.apps.googleusercontent.com">
    <Provider store={Store}>
    
      <App />
    
    </Provider>
    </GoogleOAuthProvider>
)
