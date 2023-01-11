import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { LocalAuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.Fragment>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <AuthProvider
      authType={"cookie"}
      authName={"playoff_bracket_token"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <LocalAuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </LocalAuthProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.Fragment>
);