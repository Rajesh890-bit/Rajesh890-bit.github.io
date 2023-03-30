import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../src/components/Pre";
import Home from "./pages/Home.js";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <div className="App">
      <motion.div className="cursor" variants={variants} animate="default" />
      <Header />
      <Preloader load={load} id={load ? "no-scroll" : "scroll"} />
      {/*  */}
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import { HashLink } from "react-router-hash-link";

// const App = () => {
//   return (
//     <div className="App">
//       <nav>
//         <HashLink smooth to="/#home">
//           About
//         </HashLink>

//         <HashLink smooth to="/#profile">
//           Profile
//         </HashLink>

//         <HashLink smooth to="/#services">
//           Services
//         </HashLink>
//       </nav>

//       <section id="about">
//         <h1> About</h1>

//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
//           Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
//           ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
//           est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
//           quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
//           consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
//           Enim, nostrum illo.
//         </p>
//       </section>

//       <section id="profile">
//         <h1> Profile </h1>
//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
//           Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
//           ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
//           est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
//           quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
//           consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
//           Enim, nostrum illo.
//         </p>
//       </section>

//       <section id="services">
//         <h1> Services </h1>
//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
//           Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
//           ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
//           est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
//           quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
//           consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
//           Enim, nostrum illo.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default App;
