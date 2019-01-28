import React from 'react';
import PropTypes from 'prop-types';
import { Container, SmallHeader, LargeHeader } from './index.css';
import Button from 'components/button';

const Header = ({ align, heading, subHeading, description, button }) => (
  <Container align={align}>
    {heading && <SmallHeader>{heading}</SmallHeader>}
    <LargeHeader>{subHeading}</LargeHeader>
    {description && <p>{description}</p>}
    {button && <Button href={button.href} text={button.text} />}
  </Container>
);

Header.propTypes = {
  align: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string,
  button: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Header;
