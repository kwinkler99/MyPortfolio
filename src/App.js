import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";
import Links from "./components/links";
import Contact from "./components/contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <AboutMe />
        <Resume />
        <Links />
        <Contact />
      </div>
    </div>
  );
}

export default App;
