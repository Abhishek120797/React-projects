import React from 'react';
import {useState, useEffect} from 'react';

function Header() {

  const [isActive, setIsActive] = useState(false);
  const [isToggled,setIsToggled] = useState(false);

useEffect(()=>{

  const handleScroll = ()=>{
      setIsActive(window.scrollY>100);
    }

    window.addEventListener('scroll',handleScroll);
  },[])

  const handleToggle = ()=>{
    setIsToggled(!isToggled)
  };

  const handleLinkClick= ()=>{
    setIsToggled(false)
  }


  return (
    <header className={`header ${isActive?'active':''}`}>
      <div className="container">
  
        <a href="#" className="logo">
          <img src="./images/logo.svg" width="84" height="26" alt="logo"/>
        </a>
  
        <nav className={`navbar ${isToggled?'active':''}`}>
  
          <div className="navbar-top">
            <a href="#" className="logo">
              <img src="./images/logo.svg" width="84" height="26" alt="logo"/>
            </a>
  
            <button className="nav-close-btn" aria-label="close menu"
            onClick={handleToggle}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
  
          <ul className="navbar-list">
  
            <li>
              <a href="#home" className="navbar-link" 
              onClick={handleLinkClick}
              data-nav-link>Home</a>
            </li>
  
            <li>
              <a href="#service" className="navbar-link" 
              onClick={handleLinkClick}
              >Services</a>
            </li>
  
            <li>
              <a href="#about" className="navbar-link" 
              onClick={handleLinkClick}
              >About</a>
            </li>
  
            <li>
              <a href="#project" className="navbar-link" 
              onClick={handleLinkClick}
              >Project</a>
            </li>
  
            <li>
              <a href="#review" className="navbar-link" 
              onClick={handleLinkClick}
              >Review</a>
            </li>
  
            <li>
              <a href="#contact" className="navbar-link" 
              onClick={handleLinkClick}
              >Contact</a>
            </li>
  
          </ul>
  
        </nav>
  
        <a href="#" className="btn btn:hover">
          <span className="span">Get A Quote</span>
  
          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
  
        <button className="nav-open-btn btn:hover"
        onClick={handleToggle}
        aria-label="open menu">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>
  
        <div className={`overlay ${isToggled? 'active':''}`}
        onClick={handleToggle}
        ></div>
  
      </div>
    </header>
  );
}

export default Header;