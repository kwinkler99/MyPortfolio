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
                <h1>Katarzyna Winkler</h1>
                {stars}
                <div className="planets">
                    <span className="neptune"></span>
                    <span className="orbit-uranus"></span>
                    <span className="saturn"></span>
                    <span className="orbit-jupiter"></span>
                    <span className="mars"></span>
                    <span className="orbit-earth"></span>
                    <span className="venus"></span>
                    <span className="orbit-mercury"></span>
                    <span className="sun"></span>
                    <span className="mercury"></span>
                    <span className="orbit-venus"></span>
                    <span className="earth"></span>
                    <span className="orbit-mars"></span>
                    <span className="jupiter"></span>
                    <span className="orbit-saturn"></span>
                    <span className="uranus"></span>
                    <span className="orbit-neptune"></span>
                </div>
            </div>
        </div>
    );
}
  
export default AboutMe;
  