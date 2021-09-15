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
    let idList = ["navbar-home", "navbar-form", "navbar-about-me", "navbar-contact"]
    let id = ""
    if ( first_condition ) {
      urlHash = "#home";
      id = idList[0]
    } else if ( second_condition ) {
      urlHash = "#form";
      id = idList[1]
    } else if ( third_condition ) {
      urlHash = "#about-me"
      id = idList[2]
    } else if ( fourth_condition ) {
      urlHash = "#contact"
      id = idList[3]
    }

    for( let i = 0; i < idList.length; i++ ) {
      if( id === idList[i]){
        document.getElementById(id).style.color = "rgb(34, 71, 235)"
      } else {
        document.getElementById(idList[i]).style.color = "black"
      }
    }

    window.history.replaceState(null, null, urlHash);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListening);

    const currentHref = window.location.href.split("#")[1]
    if (document.getElementById("navbar-" + currentHref)){
      document.getElementById("navbar-" + currentHref).style.color = "rgb(34, 71, 235)"
    } else {
      document.getElementById("navbar-home").style.color = "rgb(34, 71, 235)"
    }
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
