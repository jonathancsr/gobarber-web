import React from 'react';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <ToastProvider>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ToastProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);
export default App;
