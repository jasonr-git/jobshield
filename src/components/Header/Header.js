import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [folded, setFolded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) { // Adjust this value as needed
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
    <div className={`header-container ${folded ? 'folded' : ''}`}>
      <h1 className="header-title">ಸುಪ್ರೀತ್ ಸೌಹಾರ್ದ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ</h1>
    </div>
  );
};

export default Header;
