import { Element, scroller } from "react-scroll";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContacMe";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Nabvar";
import TechSkills from "./components/TechSkills/TechSkills";

function App() {
  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Navbar scrollTo={scrollTo}/>
      {/* <Element name="about" className="h-screen border border-black">
        <AboutMe />
      </Element>
      <Element name="tech" className="h-screen border border-black">
        <TechSkills />
      </Element> */}
      <Element name="contact" className="h-screen border border-black">
        <ContactMe />
      </Element>
      <Footer scrollTo={scrollTo} />
    </>
  );
}

export default App;
