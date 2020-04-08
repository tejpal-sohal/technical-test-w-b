import React, { useContext } from 'react'
import { CardContext } from '../contexts/CardContext'
import Logo from '../img/logo.png'

const NavBar = () => {
  const { cards } = useContext(CardContext) 
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <img src={Logo} width="100" height="50" alt="nav-logo" />
      <div data-testid="card-count" className="pull-right" > <h2 className="text-light">{cards.length > 1 ? `You have ${cards.length} Cards` : (cards.length === 0) ? `GAME OVER ` : `You have ${cards.length} Card` }</h2></div>
    </nav>
  );
}

export default NavBar