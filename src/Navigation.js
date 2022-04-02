import React, {useState} from 'react';
import './Styles/navigation.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navigation() {
  const [showMenu, setshowMenu] = useState(false);

  function toggleMenu() {
    showMenu ? setshowMenu(false) : setshowMenu(true);
  }
  

  return (
    <BrowserRouter>
      <div className='navbar-container'>
        <h1 className='logo'>krishokr</h1>
        <nav className='navbar desktop'>
          <Link to='#home' className='nav-item' smooth>Home</Link>
          <Link to='#about' className='nav-item' smooth>About</Link>
          <Link to='#work' className='nav-item' smooth>Work</Link>
          <Link to='#experience' className='nav-item' smooth>Experience</Link>
          <Link to='#contact' className='nav-item' smooth>Contact</Link>
        </nav>
        <nav className='mobile'>
          <button onClick={() => toggleMenu()}>{showMenu ? 'X' : 'show Menu'}</button>
          <div className='mobile-nav' style={{display: showMenu ? 'flex' : 'none'}}>
            <Link to='#home' className='nav-item' smooth>Home</Link>
            <Link to='#about' className='nav-item' smooth>About</Link>
            <Link to='#work' className='nav-item' smooth>Work</Link>
            <Link to='#experience' className='nav-item' smooth>Experience</Link>
            <Link to='#contact' className='nav-item' smooth>Contact</Link>
          </div>
          
        </nav>

      </div>
    </BrowserRouter>

  )
}
