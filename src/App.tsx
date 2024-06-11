import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

function App() {
  return (
    <>
    <UnauthenticatedTemplate>
          <Login />
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <Dashboard />
        </AuthenticatedTemplate>
        </>
  );
}

export default App;
