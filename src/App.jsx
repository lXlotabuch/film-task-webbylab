import React from 'react';
import { CardPage } from './components/CardPage/CardPage.jsx';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <CardPage />
    </div>
  );
};

export default App;
