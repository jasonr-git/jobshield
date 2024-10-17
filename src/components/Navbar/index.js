import React, { useState, useEffect, useRef } from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon } from './NavbarStyledComponent'; // Importing styled components
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import logo from '../../images/image-2.png';
import MobileNavbar from './MobileNavbar.js';
import './nav.css';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State to track submenu
  const [scrolled, setScrolled] = useState(false); // State to track scrolling
  const theme = useTheme();
  const submenuRef = useRef(null);

  
  const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Position behind other content */
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); /* Define the shape, adjust as needed */
  background-color: rgba(255, 255, 255, 0.0); /* Semi-transparent background color */
  backdrop-filter: blur(10px);
`;


  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 700;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        closeSubmenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  return (
    <>
     <BackgroundShape />
     
      <Nav className="navbg" scrolled={scrolled}>
        <NavbarContainer>
          <NavLogo to=''>
            <a style={{ display: 'flex', alignItems: 'center', color: 'white', cursor: 'pointer', paddingLeft: '1rem' }}>
              <img src={logo} alt="Logo" style={{ width: '3rem', height: '3rem' }} /> <Span>SUPREET SOUHARDA</Span>
            </a>
          </NavLogo>

          <NavItems>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <div style={{ position: 'relative' }} ref={submenuRef}>
              <NavLink as="div" onClick={toggleSubmenu} style={{ cursor: 'pointer' }}>Services</NavLink>
              {isSubmenuOpen && (
                <div className='submenu'>
                  <NavLink to="/deposit" style={{ marginBottom: '8px' }}>Deposit</NavLink>
                  <NavLink to="/loan" style={{ marginBottom: '8px' }}>Loan</NavLink>
                  <NavLink to="/others">Others</NavLink>
                </div>
              )}
            </div>
           
            <NavLink to="/news">News</NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton href="/contact">Generate Mail</GitHubButton>
          </ButtonContainer>
         
        </NavbarContainer>
  <MobileNavbar />

      </Nav>
    </>
  );
};

export default Navbar;
