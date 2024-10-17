import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';

// Directly written project data
const projects = [
  {
    id: 9,
    title: "Gold Loan",
    date: "coming soon",
    description: "Unlock the value of your gold with our flexible gold loan options. Pledge your gold jewelry or coins and get instant funds with minimal documentation. Enjoy low-interest rates, customizable repayment options, and quick processing. Borrow up to 90% of your gold's market value and choose a tenure that suits your needs. Secure your finances today with our reliable and hassle-free gold loan services.",
    image: "https://cdn.britannica.com/51/173051-131-1ECD9C16/gold-metal-Stacks-bars-Blocks-money-mercantilism.jpg",
    tags: ["1% interest"],
    category: "Loan",
    github: "#",
    webapp: "#",
  },
  {
    id: 0,
    title: "Bike Loan",
    date: "apply now",
    description: "Get on the road with ease using our bike loan services. Whether you're purchasing a new or used motorcycle, we offer competitive interest rates and flexible repayment terms to suit your budget. Enjoy quick approvals and minimal paperwork, with loan amounts covering up to 100% of the bike's value. With convenient EMI options and personalized service, owning your dream bike is now more accessible than ever. Apply for a bike loan today and ride towards your dreams effortlessly.",
    image: "https://static.toiimg.com/photo/80452572.cms",
    tags: ["abcd"],
    category: "Loan",
    github: "#",
    webapp: "#",
  },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Services</Title>
        <Desc>
          Supreet Souharda Co-op Society offers high-interest savings accounts, flexible loans, and guaranteed return fixed deposits. We provide comprehensive insurance, seamless digital banking, recurring deposits, microfinance solutions, expert financial advisory, and community programs to support financial growth and well-being.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects;
