import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/login';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);
export default App;
