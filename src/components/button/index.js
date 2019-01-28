import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Button = ({ href, text }) => <Link to={href}>{text}</Link>;

Button.propTypes = {
  align: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.strin,
};

export default Button;
