import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Main from './components/Main/Main';
import Toast from './components/Toast';
import AppProvider from './context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Form />
      <Main />
      <Toast />
    </AppProvider>
  );
};

export default App;
