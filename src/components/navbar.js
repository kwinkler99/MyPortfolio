import {navbar} from '../data/data.js' 
import '../style/navbar.scss'

function Navbar() {
    const buttons = navbar.buttons.map(item => {
        return <a href={"#" + item.id} id={"navbar-" + item.id} onClick={() => closeNav()} key={item.id}>{item.text}</a>
    })

    const openNav = () => {
        document.getElementsByClassName("nav-buttons")[0].style.width = "220px";
    }

    const closeNav = () => {
        const mediaQuery = window.matchMedia('(max-width: 650px)')

        if (mediaQuery.matches) {
            document.getElementsByClassName("nav-buttons")[0].style.width = "0px";
        }
    }

    return (
        <nav className="nav">
            <strong style={{marginLeft: '10px'}}>KATARZYNA WINKLER</strong>
            <span className="mediaButtonOpenNav" style={{fontSize: '25px', cursor: 'pointer'}} onClick={() => openNav()}>&#9776;</span>
            <div className="nav-buttons">
                <span className="mediaButtonCloseNav" style={{fontSize: '40px', color: 'white', cursor: 'pointer'}} onClick={() => closeNav()}>&times;</span>
                {buttons}                
            </div>
        </nav>
    );
}
  
export default Navbar;
  