import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

function Header(props){
    const [isNavbarOpen, setNavBarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavBarOpen(!isNavbarOpen);
    }
    return (
        <React.Fragment>
            <Navbar expand="md" dark className="bg-dark">
                <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
                <NavbarBrand>The Compost Shop</NavbarBrand>
                <Collapse isOpen={isNavbarOpen} navbar className="justify-content-end">
                    <Nav pills>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">My Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;