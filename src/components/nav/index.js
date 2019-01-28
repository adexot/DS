import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, Title } from './header.css';
// import Title from 'components/title';
import NavRight from 'components/nav/navRight';
import Logo from 'images/svg/logo.svg';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Nav = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1">
          <Logo />
          {title}
        </Title>
      </Link>

      <NavRight />
    </Container>
  </AnimatedContainer>
);

Nav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Nav;
