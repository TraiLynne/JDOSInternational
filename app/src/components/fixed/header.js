import React, { useState } from 'react';
import {
    Link
} from 'react-router-dom';

import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink, 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';

import {MainLogo} from '../../assets/index';

export const Header = (props) => {

    const [collapsed, setCollapsed] = useState(true);
    

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar color='faded' light expand='md'>
            <NavbarBrand href="/" className="mr-auto"><img src={MainLogo}/></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <Link to='/'>
                            <NavLink>Home</NavLink>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link to='/about-us'>
                            <NavLink>About Us</NavLink>
                        </Link>
                    </NavItem>
                    <NavLink>
                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <Link to='/services'>
                                        Services
                                    </Link>
                                </DropdownToggle>
                            <DropdownMenu right>
                                <Link to='/services/construction-management'>
                                    <DropdownItem>
                                        Construction Management
                                    </DropdownItem>
                                </Link>
                                <Link to='/services/facilities-maintenance'>
                                    <DropdownItem>
                                    Facilities Maintenance & Management
                                    </DropdownItem>
                                </Link>
                                <Link to='/services/program-project'>
                                    <DropdownItem>
                                    Program & Project Management
                                    </DropdownItem>
                                </Link>
                                <Link to='/services/engineering-support'>
                                    <DropdownItem>
                                    Engineering Admin Support Services
                                    </DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavLink>
                    <NavItem>
                        <Link to='/projects'>
                            <NavLink>Projects</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/careers'>
                            <NavLink>Careers</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/contact'>
                            <NavLink>Contact</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;