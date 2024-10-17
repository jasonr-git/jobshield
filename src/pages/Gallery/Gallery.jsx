import styled from 'styled-components';
import Photo from '../../components/Gallery';
import Footer from "../../components/Footer";
import Expand from "../../components/imgdetails";
import React, { useState, useEffect } from 'react';

const GalleryContainer = styled.div`
  background: linear-gradient(to right, red, blue);
  min-height: 100vh; /* Ensures it takes at least the full viewport height */
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  background-color: black;
  color: white; /* Optional: if you want to ensure the text color contrasts well */
`;

const Gallery = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  console.log(openModal);

  return (
    <GalleryContainer>
      <ContentWrapper>
        <Photo openModal={openModal} setOpenModal={setOpenModal} />
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      {openModal.state && (
        <Expand openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </GalleryContainer>
  );
}

export default Gallery;
