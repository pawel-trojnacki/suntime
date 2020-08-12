import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../images/logo.svg';
import LogoWrapper from '../LogoWrapper/LogoWrapper';
import CartButton from './CartButton';
import Burger from './Burger';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
`;

const InnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Panel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Navbar = ({ open, handleBurgerClick }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <a href="/">
          <LogoWrapper src={Logo} alt="suntime.com" />
        </a>
        <Panel>
          <CartButton href="#" className="snipcart-checkout">
            Cart
          </CartButton>
          <Burger open={open} handleBurgerClick={handleBurgerClick} />
        </Panel>
      </InnerWrapper>
    </Wrapper>
  );
};

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleBurgerClick: PropTypes.func.isRequired,
};

export default Navbar;
