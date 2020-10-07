import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'
import logo from '../img/logo-svg-transp.svg';



function Navbar() {

    // scrollToTop = () => {
    //     scroll.scrollToTop();
    //   };

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // }

        // window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" 
                    // onClick={this.scrollToTop}
                    >
                        FizjoTRENER <img className="nav-logo" src={logo} />  
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item nav-item_active">
                        <Link  activeClass="active" to='topPage' spy={true} smooth={true} offset={-80} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  activeClass="active" to='offer' spy={true} smooth={true} offset={-80} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                Oferta
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  activeClass="active" to='about' spy={true} smooth={true} offset={-80} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                O mnie
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link  activeClass="active" to='contact' spy={true} smooth={true} offset={-80} duration=  {500} className='nav-links' onClick={closeMobileMenu}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
