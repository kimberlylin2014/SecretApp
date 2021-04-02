
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './navbar.styles.css';

const Header = (props) => {
  console.log(props)
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className={styles.Header}>
      <Navbar light>
        <NavbarBrand href="/" className="mr-auto" >
          Secrets
          <img src="/assets/keys.png" width="45px" style={{marginLeft: '10px'}}></img>
        </NavbarBrand>
          {props.currentUser ? `Welcome, ${props.currentUser.name.toUpperCase()}!` : null}
      </Navbar>
    </div>
  );
}

export default Header;

// style={{marginLeft: '100px', padding: '10px'}}