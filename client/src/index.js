import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EmailContextProvider from './email.context';


ReactDOM.render(
  <EmailContextProvider>
    <App />
    </EmailContextProvider>,
  document.getElementById('root')
);

