import React, { useState } from 'react';
import '../scss/App.scss';
import CardContextProvider from '../contexts/CardContext'
import NavBar from './NavBar';
import CardList from './CardList';
import NewCardForm from './CardForm';

function App() {
  const [darkMode,  setDarkMode] = useState(false)
  const handleDarkMode = (e) =>{
    e.preventDefault()
    setDarkMode(!darkMode)
  }
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
        <CardContextProvider>
          <NavBar/>
          <CardList/>
          <NewCardForm darkMode={darkMode} handleDarkMode={handleDarkMode}/>
        </CardContextProvider>
    </div>
  );
}

export default App;
