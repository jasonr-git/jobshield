import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme } from './utils/Themes.js'; 
import Navbar from "./components/Navbar/index.js";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/Footer/index.js";
import Chatbot from "./components/chatbot/Chatbot.js";
import styled from "styled-components"; 

const Body = styled.div``;

const FooterWrapper = styled.div`
  background-color: black;
  z-index: 1; /* Ensure this value is lower than Chatbotwrap */
  color: white; /* Ensure the text contrasts well */
  margin-bottom: -100px;
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: ${({ theme }) => theme.navBg};
  transition: transform 0.3s ease-in-out;
`;

const HeaderNavContainer = styled.div`
  position: relative;
  transition: transform 0.3s ease-in-out;
  transform-origin: top; /* Ensures the fold happens from the top */
`;

const Chatbotwrap = styled.div`
  z-index: 998; /* Ensure this value is higher than other components */
  position: fixed; /* Ensures it stays in place when scrolling */
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  @media (max-width: 768px) {
    // Adjust as needed for mobile view
  }
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [folded, setFolded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust this value as needed
      setFolded(true);
    } else {
      setFolded(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={
            <Body>
              <Chatbotwrap>
                <Chatbot />
              </Chatbotwrap>
              <FooterWrapper>
                <Footer />
              </FooterWrapper>
            </Body>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
