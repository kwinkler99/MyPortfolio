import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/contact.scss'

function Contact() {
    return (
        <div id="contact">
            <h2>Contact</h2>
            <div className="contact_data">
                    <a href="https://github.com/kwinkler99">
                        
                        <FontAwesomeIcon icon={['fab', 'github-alt']} size="3x" />
                        <p>github.com/kwinkler99</p>
                    </a>
                    <a href="www.google.pl">
                        
                        <FontAwesomeIcon icon={['fab', 'firefox']} size="3x" />
                        <p>This page</p>
                    </a>
                    <a href="mailto:kasia.winkler99@gmail.com">
                        <FontAwesomeIcon icon={['far', 'envelope']} size="3x" />
                        <p>kasia.winkler99@gmail.com</p>
                    </a>
                    
                    
            </div>
        </div>
    );
}
  
export default Contact;
  