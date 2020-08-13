import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import '../../css/snipcart.css';

import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/theme';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
