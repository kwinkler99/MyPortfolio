import React from 'react';
import '../style/about-me.scss';
import {info_about_me} from '../data/data';
import my_photo from '../data/my_photo.jpg';

function AboutMe() {
    return (
        <div id="about-me">
            <div className="small-window">
                <img src={my_photo} alt="Me"/>
                <div>
                    <p>{info_about_me}</p>
                </div>
            </div>
        </div>
    );
}
  
export default AboutMe;
  