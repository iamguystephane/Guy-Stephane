import HomePageAbout from "./About";
import HomeHero from "./HomeHero";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <HomeHero />
      </section>
      <section id="about">
        <HomePageAbout />
      </section>
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
