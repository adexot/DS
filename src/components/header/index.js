import React from 'react';
import PropTypes from 'prop-types';
import { Container, SmallHeader, LargeHeader } from './index.css';

const Header = ({ heading, subHeading, description }) => (
  <Container>
    {heading && <SmallHeader>{heading}</SmallHeader>}
    <LargeHeader>{subHeading}</LargeHeader>
    {description && <p>{description}</p>}
  </Container>
);

Header.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Header;
