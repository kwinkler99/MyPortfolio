import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";
import Links from "./components/links";
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
        <AboutMe />
        <Resume />
        <Links />
        <Contact />
      </div>
    </div>
  );
}

export default App;
