import { useState } from "react";
import styles from "./App.module.css"
import { Element, scroller } from "react-scroll";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContacMe";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Nabvar";
import TechSkills from "./components/TechSkills/TechSkills";

function App() {
  const [visible, setVisible] = useState({
    about: true,
    tech: true,
    contact: true
  });


  const scrollTo = (name) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [name]: false
    }));
    
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Element name="about"  className={`h-screen ${visible.about ? styles["fade-out"] : styles["fade-out-hidden"]}`}>
        <AboutMe />
      </Element>
      <Element name="tech"  className={`h-screen ${visible.about ? styles["fade-out"] : styles["fade-out-hidden"]}`}>
        <TechSkills />
      </Element>
      <Element name="contact"  className={`h-screen ${visible.about ? styles["fade-out"] : styles["fade-out-hidden"]}`}>
        <ContactMe />
      </Element>
      <Footer scrollTo={scrollTo} />
    </>
  );
}

export default App;
