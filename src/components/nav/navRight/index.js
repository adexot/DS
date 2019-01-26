import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const NavRight = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Projects</Link>
      </li>
      <li>
        <Link to="/about">Services</Link>
      </li>
      <li>
        <Link to="/about">Approach</Link>
      </li>
      <li>
        <Link to="/about">Company</Link>
      </li>
      <li>
        <Link to="/about">Contact Us</Link>
      </li>
    </ul>
  </Container>
);

export default NavRight;
