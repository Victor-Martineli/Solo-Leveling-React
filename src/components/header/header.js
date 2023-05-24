import React, { useRef , useEffect} from "react";
import './header.css'
import slLogo from '../../assets/Logo/sl-logo.png'
import { Link } from "react-router-dom";



function Header() {
    const btnMobileRef = useRef(null);
  
    function toggleMenu() {
      const nav = document.getElementById('nav-desktop');
      nav.classList.toggle('active');
    }

    // Adiciona o evento de click no botão usando a referência
    // ao elemento DOM obtida pelo useRef
    useEffect(() => {
        if (btnMobileRef.current) {
            btnMobileRef.current.addEventListener('click', toggleMenu);
        }
    }, [btnMobileRef]);   
  
    return (
      <header> 
        <img id="logo" src={slLogo} alt="SL Logo" />
        
          <nav id="nav-desktop" className="nav">
            <ul id="menu">
              <Link style={{textDecoration: 'none'}} to='/'>
                <li>Home</li>
              </Link>
  
              <Link style={{textDecoration: 'none'}} to='/videos'>
                <li>Vídeos</li>
              </Link>
  
              <Link style={{textDecoration: 'none'}} to='/fotos'>
                <li>Fotos</li>
              </Link>
  
              
            </ul>
          </nav>
          <button ref={btnMobileRef} id="btn-mobile">Menu</button>
        
      </header>
    );
  }
  
  export default Header;
  