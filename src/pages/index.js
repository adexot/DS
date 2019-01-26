import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import IOExample from 'components/io-example';
import Home from './home';

const Index = () => (
  <Layout>
    <Home />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
