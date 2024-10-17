import React, { useEffect } from 'react';
import styled from 'styled-components';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';

// Define a styled container with a smooth blended dark red, black, and dark blue gradient background
const StatsContainer = styled.div`
  background: linear-gradient(60deg, #8B0000 20%, #000000 40%, #000000 60%, #00008B 80%); /* Smoothly blended dark red, black, and dark blue */
  min-height: 100vh; /* Ensures it takes at least the full viewport height */
  margin-right:0px;
  display: flex;
  margin:0px;
  flex-direction: column;
 
`;

// Define a styled wrapper for the footer with a black background
const FooterWrapper = styled.div`
  background-color: black;
  color: white; /* Ensure text color contrasts well */
  padding: 20px 0; /* Add some padding to the footer */
`;

const Stats = () => { 
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <StatsContainer>
      <div>
        <Experience />
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </StatsContainer>
  );
};

export default Stats;
