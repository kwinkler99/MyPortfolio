import React from 'react'
import '../style/about-me.scss'



function AboutMe() {

    const stars = []
    for(let i = 0; i < 50; i++){
        stars.push(<span className="star" id={i} key={i}></span>)
    }
    
    return (
        <div id="about-me">
            <div className="cosmos">
                <h1>Hello</h1>
                {stars}
                <div className="planets">
                    <span className="sun"></span>
                    <span className="mercury"></span>
                    <span className="venus"></span>
                    <span className="earth"></span>
                    <span className="mars"></span>
                    <span className="jupiter"></span>
                    <span className="saturn"></span>
                    <span className="uranus"></span>
                    <span className="neptune"></span>
                    <span className="pluto"></span>
                </div>
            </div>
        </div>
    );
}
  
export default AboutMe;
  