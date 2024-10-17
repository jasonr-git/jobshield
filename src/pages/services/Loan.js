import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Projects from '../../components/Projects/Loan';
import Footer from "../../components/Footer";
import ProjectDetails from "../../components/ProjectDetails";

import backgroundImage from '../../images/bg2.jpg'; // Import your background image here

const BackgroundImage = styled.div`
  position: relative; /* Required for z-index to work */
  min-height: 100vh; /* Ensures it takes at least the full viewport height */
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(20px); /* Add blur filter to the background image */
  z-index: 1; /* Adjust the z-index as needed */
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; /* Place content above the blur overlay */
`;

const FooterWrapper = styled.div`
  background-color: black;
  color: white; /* Optional: if you want to ensure the text color contrasts well */
  position: relative;
  z-index: 3; /* Place footer above content and blur overlay */
`;

const Loan = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    // Scroll to the top of the page when the Loan component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only on mount

  return (
    <BackgroundImage>
      <BlurOverlay />
      <ContentWrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </BackgroundImage>
  );
};

export default Loan;
