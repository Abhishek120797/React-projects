import React from 'react';

function Header() {



  return (
    <header className="header" data-header>
      <div className="container">
  
        <a href="#" className="logo">
          <img src="./images/logo.svg" width="84" height="26" alt="logo"/>
        </a>
  
        <nav className="navbar" data-navbar>
  
          <div className="navbar-top">
            <a href="#" className="logo">
              <img src="./src/assets/images/logo.svg" width="84" height="26" alt="logo"/>
            </a>
  
            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
  
          <ul className="navbar-list">
  
            <li>
              <a href="#home" className="navbar-link" data-nav-link>Home</a>
            </li>
  
            <li>
              <a href="#service" className="navbar-link" data-nav-link>Services</a>
            </li>
  
            <li>
              <a href="#about" className="navbar-link" data-nav-link>About</a>
            </li>
  
            <li>
              <a href="#project" className="navbar-link" data-nav-link>Project</a>
            </li>
  
            <li>
              <a href="#review" className="navbar-link" data-nav-link>Review</a>
            </li>
  
            <li>
              <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
            </li>
  
          </ul>
  
        </nav>
  
        <a href="#" className="btn btn:hover">
          <span className="span">Get A Quote</span>
  
          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
  
        <button className="nav-open-btn btn:hover" aria-label="open menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>
  
        <div className="overlay" data-overlay data-nav-toggler></div>
  
      </div>
    </header>
  );
}

export default Header;