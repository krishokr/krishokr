import React from 'react';
import './Styles/navigation.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navigation() {

  return (
    <BrowserRouter>
      <div className='navbar-container'>
        <h1 className='logo'>krishokr</h1>
          <nav className='navbar'>
          <Link to='#home' className='nav-item' smooth>Home</Link>
          <Link to='#about' className='nav-item' smooth>About</Link>
          <Link to='#work' className='nav-item' smooth>Work</Link>
          <Link to='#experience' className='nav-item' smooth>Experience</Link>
          <Link to='#contact' className='nav-item' smooth>Contact</Link>
        </nav>

      </div>
    </BrowserRouter>

  )
}
