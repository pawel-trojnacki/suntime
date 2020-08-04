import React from 'react';
import {ThemeProvider} from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from '../../theme/GlobalStyle';
import {theme} from '../../theme/theme';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
