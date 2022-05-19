import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Routes.js';
import Navigation from './components/navigation/Navigation.js';
import Menu from './components/menu/Menu.js';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <Router>
          {
            showMenu && <Menu toggleMenu={toggleMenu}/>
          }
          <Navigation toggleMenu={toggleMenu}/>
          <Routes />
      </Router>
    </>
  );
}

export default App;
