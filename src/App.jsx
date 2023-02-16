import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Main from './components/Main/Main';
import AppProvider from './context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Form />
      <Main />
    </AppProvider>
  );
};

export default App;
