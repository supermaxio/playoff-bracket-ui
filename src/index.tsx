import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
<AuthProvider
          authType={"cookie"}
          authName={"playoff_bracket_token"}
          cookieDomain={window.location.hostname}
          cookieSecure={false}
        >
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </AuthProvider>
  </React.Fragment>,
  document.getElementById('root'),
);