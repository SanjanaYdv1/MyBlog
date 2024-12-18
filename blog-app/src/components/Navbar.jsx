import React, { useState } from "react";
import { NavLink as ReactLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <BootstrapNavbar color="primary" dark expand='md' fixed="">
        <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" container mx-auto" navbar>
          <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Contact">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink tag={ReactLink} to="/Login">
          <button className="bg-purple-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">Login</button>
          </NavLink>
        </Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar; 