import "./App.css";

import { Box } from "@chakra-ui/react";

import { HStack, Text, Image } from "@chakra-ui/react";

import Navbar from "./Component/Navbar";

import Home from "./Component/Home";

import About from "./Component/About";

import Contact from "./Component/Contact";

import Skills from "./Component/Skills";

import Projects from "./Component/Projects";

import { GithubStats } from "./Component/GithubStats";
// import ParticleBackground from "./Component/ParticlesBg/ParticleBackground";
// import ParticleHeaderBg from "./Component/ParticlesBg/ParticlesHeader/ParticleHeaderBg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import Footer from "./Component/Footer";
function App() {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  return (
    <Box minW="280px" className="App" color="white" bg={"#64B5F6"}>
      <Navbar />
      <ScrollToTop />
      <Box m="auto" w={{ base: "92%", "1120px": "82%" }}>
        <Home />

        <About />

        <Skills />

        <Projects />

        <GithubStats />

        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
