import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import { darkTheme } from "./utils/Themes";
import { lightTheme } from './utils/Themes';
import { ThemeProvider } from 'styled-components';
import styled from "styled-components"
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom"


const Body = styled.div`
  font-family: 'Times New Roman', serif;
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: radial-gradient(circle at 24.1% 68.8%, rgb(35, 35, 35) 0%, rgb(0, 0, 0) 95.4%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme:lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </Wrapper>
        </Body>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;