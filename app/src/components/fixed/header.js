import React from 'react';
import {
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                Logo Place Holder
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about-us'>About Us</Link>
                <Link to='/services'>Services</Link>
                <div>
                    <Link to='/services/construction-management'>Construction Management</Link>
                    <Link to='/services/facilities-maintenance'>Facilities Maintenance & Management</Link>
                    <Link to='/services/program-project'>Program & Project Management</Link>
                    <Link to='/services/engineering-support'>Engineering Admin Support Services</Link>
                </div>
                <Link to='/projects'>Projects</Link>
                <Link to='/careers'>Careers</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <div>
                Search Bar Place Holder
            </div>
        </header>
    )
}

export default Header;