import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>

        <div className="container">

            <div className="logo">

                <a href="">LOGO<span>SO</span></a>
                
             </div>

             <div className="navigation-wrapper">

                <ul className="nav-ul">

                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about-us">ABOUT US</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/alumini">ALUMINI</Link></li>
                    <li><Link to="/contact-us">CONTACT US</Link></li>

                </ul>

             </div>

        </div>

    </nav>
  )
}

export default Navbar