import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
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
    DropdownItem } from 'reactstrap';

import Logo from '../images/logo.png'
import LogoWord from '../images/logo-word.png'

export default class NavbarComponent extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <Fragment>
            <Navbar color="light" light expand="md">
              <Link to="/" className="navbar-brand">
                <img src={Logo} width="40px" alt=""/>
                <img src={LogoWord} className='' width="150px" alt=""/>
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to='/about-us' className='nav-link'>About Us</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/contact' className='nav-link'>Contact Us</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/faq' className='nav-link'>FAQ</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Fragment>
        )
      }
}


