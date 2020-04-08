import React from 'react';
import '../scss/App.scss';
import CardContextProvider from '../contexts/CardContext'
import NavBar from './NavBar';
import CardList from './CardList';
import NewCardForm from './CardForm';

function App() {
  return (
    <div className="App">
        <CardContextProvider>
          <NavBar />
          <CardList/>
          <NewCardForm/>
        </CardContextProvider>
    </div>
  );
}

export default App;
