import {navbar} from '../data/data.js' 

const nav_style = {
    background: 'rgb(253, 253, 253)',
    display: 'flex',
    padding: '5px',
    justifyContent: 'space-between',
    alignItems: 'center'
}

function Navbar() {
    const buttons = navbar.buttons.map(item => {
        return <p style={{margin: '10px'}}>{item}</p>
    })

    return (
        <nav style={nav_style} className="Nav">
            <strong>KATARZYNA WINKLER</strong>
            <div style={{
                ...nav_style,
                }}>
                {buttons}                
            </div>
        </nav>
    );
}
  
export default Navbar;
  