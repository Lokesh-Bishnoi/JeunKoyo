import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Main from "../components/Main";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Main />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
