import {navbar} from '../data/data.js' 
import '../style/navbar.scss'

function Navbar() {
    const buttons = navbar.buttons.map(item => {
        return <p style={{margin: '10px'}}>{item}</p>
    })

    return (
        <nav className="nav">
            <strong style={{marginLeft: '10px'}}>KATARZYNA WINKLER</strong>
            <div className="nav-buttons">
                {buttons}                
            </div>
        </nav>
    );
}
  
export default Navbar;
  