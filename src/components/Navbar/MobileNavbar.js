import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../icons/home.svg';
import { ReactComponent as ChatbotIcon } from '../../icons/bot.svg';
import { ReactComponent as ContactIcon } from '../../icons/contact.svg';
import { ReactComponent as RegisterIcon } from '../../icons/register.svg';
import { ReactComponent as NewsIcon } from '../../icons/news.svg';
import { ReactComponent as AboutIcon } from '../../icons/about.svg';
import { ReactComponent as StatsIcon } from '../../icons/stat.svg';
import { ReactComponent as GalleryIcon } from '../../icons/gallery.svg';
import { ReactComponent as LoanIcon } from '../../icons/loan.svg';
import { ReactComponent as DepositIcon } from '../../icons/deposit.svg';
import { ReactComponent as OthersIcon } from '../../icons/others.svg';
import { FaListUl, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
  width: 92%;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3));
  backdrop-filter: blur(35px);
  display: flex;
  justify-content: space-evenly;
  border-radius: 18px;
  align-items: center;
  padding: 10px 0;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  flex: 1;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavLabel = styled.div`
  font-size: 10px;
  margin-top: 4px;
  color: ${({ isActive }) => (isActive ? 'white' : 'white')};
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background: linear-gradient(45deg, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0.3));
  backdrop-filter: blur(35px);
  position: fixed;
  bottom: 100px;
  width: 92%;
  padding: 12px 0;
  border-radius: 18px;
  z-index: 9;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
`;

const MobileLink = styled(LinkR)`
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0.2), rgba(255, 0, 0, 0.2));
    color: #fff;
  }
`;

const IconLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExpandButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 11;
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavItem isActive={activeTab === 'Home'} onClick={() => setActiveTab('Home')}>
          <HomeIcon width={20} height={20} />
          <NavLabel isActive={activeTab === 'Home'}>HOME</NavLabel>
        </NavItem>
        <NavItem isActive={activeTab === 'Chatbot'} onClick={() => setActiveTab('Chatbot')}>
          <RegisterIcon width={20} height={20} />
          <NavLabel isActive={activeTab === 'Chatbot'}>Register</NavLabel>
        </NavItem>
        <ExpandButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaListUl />}
        </ExpandButton>
        <NavItem isActive={activeTab === 'Contact'} onClick={() => setActiveTab('Contact')}>
          <ContactIcon width={20} height={20} />
          <NavLabel isActive={activeTab === 'Contact'}>Contact</NavLabel>
        </NavItem>
        <NavItem isActive={activeTab === 'Register'} onClick={() => setActiveTab('Register')}>
          <ChatbotIcon width={20} height={20} />
          <NavLabel isActive={activeTab === 'Register'}>Chat</NavLabel>
        </NavItem>
      </NavbarContainer>
      <MobileMenu isOpen={isOpen}>
        <MobileMenuGrid>
          <MobileLink to="/deposit">
            <IconLabel>
              <DepositIcon width={20} height={20} />
              <span>Deposit</span>
            </IconLabel>
          </MobileLink>
          <MobileLink to="/loan">
            <IconLabel>
              <LoanIcon width={24} height={24} />
              <span>Loan</span>
            </IconLabel>
          </MobileLink>
          <MobileLink to="/others">
            <IconLabel>
              <OthersIcon width={24} height={24} />
              <span>Others</span>
            </IconLabel>
          </MobileLink>
          <MobileLink to="/aboutus">
            <IconLabel>
              <AboutIcon width={24} height={24} />
              <span>About us</span>
            </IconLabel>
          </MobileLink>
          <MobileLink to="/progress">
            <IconLabel>
              <StatsIcon width={24} height={24} />
              <span>Progress</span>
            </IconLabel>
          </MobileLink>
          <MobileLink to="/gallery">
            <IconLabel>
              <GalleryIcon width={24} height={24} />
              <span>Gallery</span>
            </IconLabel>
          </MobileLink>
        </MobileMenuGrid>
      </MobileMenu>
    </>
  );
};

export default MobileNavbar;
