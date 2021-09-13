import Navbar from "./components/navbar";
import Home from "./components/home";
import MyForm from "./components/form";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import './style/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import React, { useEffect } from "react";

library.add(fab)
library.add(far)


function App() {

  function scrollListening() {
    let bodyRect = document.body.getBoundingClientRect(),
        homeRect = document.getElementById("home").getBoundingClientRect(),
        formRect = document.getElementById("form").getBoundingClientRect(),
        aboutMeRect = document.getElementById("about-me").getBoundingClientRect(),
        offsetHome = homeRect.top - bodyRect.top + 60,
        offsetForm = formRect.top - bodyRect.top + 60,
        offsetAboutMe = aboutMeRect.top - bodyRect.top + 60;


    let first_condition = ( offsetForm / 2 ) >= (window.scrollY + 60) && (window.scrollY + 60) >= offsetHome
    let second_condition = offsetForm + ( offsetForm / 2 ) > (window.scrollY + 60) && (window.scrollY + 60) > ( offsetForm / 2 )
    let third_condition = offsetAboutMe + 175 >= (window.scrollY + 60) && (window.scrollY + 60) >= offsetForm + ( offsetForm / 2 )
    let fourth_condition = offsetAboutMe + 175 < (window.scrollY + 60)

    let urlHash = ""
    if ( first_condition ) {
      urlHash = "#home";
    } else if ( second_condition ) {
      urlHash = "#form";
    } else if ( third_condition ) {
      urlHash = "#about-me"
    } else if ( fourth_condition ) {
      urlHash = "#contact"
    }

    window.history.pushState(null, null, urlHash);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListening);
    
    return () => {
      window.removeEventListener("scroll", scrollListening);
    };
  });


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
