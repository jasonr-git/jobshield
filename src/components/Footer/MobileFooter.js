import React from 'react';
import styled, { keyframes } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';

const FooterContainer = styled.div`
  width: 100%;
  background: #f8f9fa; /* Lighter background for the footer */
  color: #333;
  margin-top: auto; /* Pushes the footer to the bottom of its container */
  
`; 

const FooterWrapper = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1px 1fr; /* Adjusted grid columns */
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem; /* Adjust gap for mobile view */
  }
`;

const MobileOnlyWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const HorizontalLine = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 80%;
    height: 1px;
    background-color: grey;
    margin: 0.5rem auto;
  }
`;

const BankTiming = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    order: 1; /* Ensure Timing comes first */
  }
`;

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
`;

const TimingTableWrapper = styled.div`
  max-width: 400px; /* Adjust to match the width of the Google Map */
  height: auto; /* Adjust to match the height of the Google Map */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: -5px;
`;

const TimingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TimingHeader = styled.th`
  background: linear-gradient(135deg, #6db3f2, #1e69de);
  color: #fff;
  text-align: left;
  padding: 0.75rem; /* Adjust padding as needed */
  font-weight: bold;
  font-size: 1rem;
`;

const TimingData = styled.td`
  text-align: left;
  padding: 0.75rem; /* Adjust padding as needed */
  border-bottom: 1px solid #eee;
  &:nth-child(odd) {
    background-color: #f2f6fc;
  }
  font-size: 1rem;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Name = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  color: #1e69de;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #1e69de;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #333;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #1e69de;
  }
`;

const AddressWrapper = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    order: 2; /* Move Address below Timing on mobile view */
  }
`;

const AddressContent = styled.div`
  max-height: 500px;
  overflow: hidden;
  animation: ${slideDown} 0.5s ease-in-out;
  text-align: center;
`;

const AddressText = styled.p`
  margin: 1rem 0;
  color: grey;
  font-size: 0.8rem;
  line-height: 1.5;
`;

const GoogleMap = styled.iframe`
  width: 100%;
  max-width: 400px;
  height: 200px;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1); /* Increased blur radius for a softer shadow */
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <CenterContent>
          <Name>SUPREET SOUHARDA</Name>
          <Nav>
            <NavLink href="#about">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#statistics">Statistics</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#management">Management</NavLink>
          </Nav>
          <SocialMediaIcons>
            <SocialMediaIcon
              href="https://wa.me/8867313323?text=Hello%2C%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href="#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href="#" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href="#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </CenterContent>

        <MobileOnlyWrapper>
          <HorizontalLine />
          <BankTiming>
            <h3>Timings</h3>
            <AddressText>
            Every second and fourth Saturday of the month is a bank holiday.
              <br />
              Lunch break from 1:30 to 2:30 pm
              <br />
              <br />
            </AddressText>
            <TimingTableWrapper>
              <TimingTable>
                <thead>
                  <tr>
                    <TimingHeader>Day</TimingHeader>
                    <TimingHeader>Operating Hours</TimingHeader>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TimingData>Monday - Saturday</TimingData>
                    <TimingData>10:00 AM – 5:30 PM</TimingData>
                  </tr>
                  <tr>
                    <TimingData>Sunday</TimingData>
                    <TimingData>Closed</TimingData>
                  </tr>
                </tbody>
              </TimingTable>
            </TimingTableWrapper>
          </BankTiming>

          <AddressWrapper>
            <AddressContent>
              <h3>Address</h3>
              <AddressText>
                Supreet Souharda Credit Sahakari Niyamita Kelaginoor,
                <br />
                Kelaginoor, Honnavar, Karnataka 581342
              </AddressText>
              <GoogleMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4828.934225696692!2d74.4428896759224!3d14.24297138573069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc3bf2f858feed%3A0x6e84e0ea6d2314e6!2sSupreet%20Souharda%20Co-op%20Society!5e1!3m2!1sen!2sus!4v1719344543084!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></GoogleMap>
            </AddressContent>
          </AddressWrapper>
        </MobileOnlyWrapper>
        <HorizontalLine />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
