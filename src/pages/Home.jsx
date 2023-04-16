import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };
  return (
    <>
      <div className="w-screen">
      <Navbar navController={handleNav} nav={nav} />
      <Hero nav={nav} />
      <Services nav={nav} />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Home;
