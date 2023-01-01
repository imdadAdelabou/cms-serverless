import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { COGNITO } from './configs/aws';
import { Amplify } from '@aws-amplify/core';
import {BrowserRouter} from "react-router-dom";
import './index.css';

Amplify.configure({
  aws_cognito_region: COGNITO.REGION,
  aws_user_pools_id: COGNITO.USER_POOL_ID,
  aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
