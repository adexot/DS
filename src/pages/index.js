import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Home from './home';

const Index = () => (
  <Layout>
    <Home />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
