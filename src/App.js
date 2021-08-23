import Navbar from "./components/navbar";
import Home from "./components/home";
import MyForm from "./components/form";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import './style/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab)
library.add(far)


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
        <MyForm />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

export default App;
