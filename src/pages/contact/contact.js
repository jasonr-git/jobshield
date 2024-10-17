import React, { useEffect } from 'react';
import styled from 'styled-components';
import Contactus from '../../components/Contact';
import Footer from "../../components/Footer";

const Container = styled.div`
  background: linear-gradient(to right, red, blue);
  min-height: 100vh; /* Ensures it takes at least the full viewport height */
  display: flex;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  background-color: black;
  color: white; /* Optional: if you want to ensure the text color contrasts well */
`;

const Gallery = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <br/>
      <br />
      <Contactus />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}

export default Gallery;
