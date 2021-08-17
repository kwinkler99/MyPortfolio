import React from 'react'
import '../style/about-me.scss'



function AboutMe() {

    const stars = []
    for(let i = 0; i < 20; i++){
        stars.push(<div className="star" id={i} key={i}></div>)
    }
    
    return (
        <div id="about-me">
            <div className="cosmos">
                <h1>Hello</h1>
                {stars}
            </div>
        </div>
    );
}
  
export default AboutMe;
  