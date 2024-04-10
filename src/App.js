import NavUI from "./components/navUI";
import Gallery from "./components/gallery";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import Profile from "./components/profile";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Profile></Profile>
      <NavUI></NavUI>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}

export default App;
