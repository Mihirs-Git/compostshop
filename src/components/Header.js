import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

function Header(props){
    const [isNavbarOpen, setNavBarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavBarOpen(!isNavbarOpen);
    }
    return (
        <React.Fragment>
            <Navbar expand="md" dark className="header">
                <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
                <NavbarBrand>Vardhaman Khatar Depot</NavbarBrand>
                <Collapse isOpen={isNavbarOpen} navbar className="justify-content-end">
                    <Nav pills>
                        <NavItem>
                            <NavLink className="headerLinks" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="headerLinks" href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="headerLinks" href="#">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="headerLinks" href="#">My Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;