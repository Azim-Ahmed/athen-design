import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  Nav,
  Collapse,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  Container,
} from "reactstrap";

import logo from "../../../../Assests/Illustration/Group 86.png";

import './NavSection.scss'

const NavSection = () => {
  const [collapsed, setCollapsed] = useState(true);
  

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container>
      <Navbar className="text-dark navfont" light expand="md">
        <NavbarBrand href="/">
        
          <img src={logo} style={{height:"4.5rem"}} className="ml-4" alt="Florence agency logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 bg-info" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav
            style={{ fontSize: "1.3rem" }}
            className="ml-auto justify-content-around  align-items-center"
            navbar
          >
            <NavItem>
              <NavLink className="mr-4 text-dark navfont" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark navfont" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark navfont" to="/service">
                Service
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                className=" mr-3 text-dark navfont navfont"
                to="/contact"
              >
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className=" mr-3 text-dark navfont navfont"
                to="/contact"
              >
                Our Team
              </NavLink>
            </NavItem>

            <NavItem>
                <button color="info" className="text-center btnItem">
                 
                  <NavLink
                    className="mr-3 text-dark"
                    to="/#contactus"
                  >
                    Contact us
                  </NavLink>
                </button>
              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavSection;
