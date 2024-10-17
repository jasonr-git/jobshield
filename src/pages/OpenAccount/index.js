import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Contactus from './component';
import Footer from "../../components/Footer";
import backgroundImage from '../../images/bg2.jpg';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  background-color: black;
  color: white;
  z-index: 2;
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(20px);
  z-index: 1;
`;

const AlertBar = styled.div`
  position: fixed;
  top: 25%;
  right: 0;
  border-radius: 9px;
  margin-right: 15px;
  width: 27%;
  background-color: #ffcc00;
  color: black;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  box-shadow: 0px 4px 2px -2px gray;

  @media (max-width: 600px) {
    top: 15%;
    width: 100%;
    margin-right: 0px;
    left: 0;
  }

  @media (max-width: 400px) {
    width: 100%;
    top: 12%;
    margin-right: 0px;
    left: 0;
  }
`;

const AlertMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const NoticeIcon = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const slideOut = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const TimingBar = styled.div`
  height: 5px;
  background-color: red;
  overflow: hidden;
  animation: ${slideOut} 20s linear;
  animation-fill-mode: forwards; /* Retains final state after animation ends */
`;

const OpenAccount = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Auto-close the alert after 20 seconds
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 20000);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Container>
      {showAlert && (
        <AlertBar>
          <AlertMessage>
            <NoticeIcon>⚠️</NoticeIcon>
            Only people who reside in Karwar district are eligible for registration.
            <CloseButton onClick={handleCloseAlert}>×</CloseButton>
          </AlertMessage>
          <TimingBar />
        </AlertBar>
      )}
      <BlurOverlay />
      <Contactus />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
};

export default OpenAccount;
