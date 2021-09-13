import React from 'react'
import '../style/home.scss'



function Home() {

    const stars = []
    for(let i = 0; i < 50; i++){
        stars.push(<span className="star" id={i} key={i}></span>)
    }

    const letters = []
    const name = "Katarzyna Winkler"
    for(let i = 0; i < name.length; i++){
        letters.push(<span className={"char-" + i} id={"char" + i} key={"char" + i}>{name[i]}</span>)
    }
    
    return (
        <div id="home">
            <div className="cosmos">
                <h1>{letters}</h1>
                {stars}
                <div className="planet"></div>
            </div>
        </div>
    );
}
  
export default Home;
  