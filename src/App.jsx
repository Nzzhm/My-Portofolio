import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/about";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
