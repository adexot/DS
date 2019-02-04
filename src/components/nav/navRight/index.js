import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const NavRight = () => (
  <Container>
    <ul>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/company">Company</Link>
      </li>
      <li>
        <Link to="/contact">Company</Link>
      </li>
    </ul>
  </Container>
);

export default NavRight;
