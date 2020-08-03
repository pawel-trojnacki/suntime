import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Logo from '../../images/logo.svg'
import Burger from './Burger'

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
`

const InnerWrapper = styled.div`
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled.img`
  width: 80px;
  @media (min-width: 768px) {
    width: 110px;
  }
`

const Panel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const CardButon = styled.a`
  display: block;
  margin-right: 25px;
  text-decoration: none;
  color: ${({theme}) => theme.black};
  text-transform: uppercase;
  font-weight: ${({theme}) => theme.regular};
  font-size: ${({theme}) => theme.s};

  @media (min-width: 768px) {
    margin-right: 50px;
    font-size: ${({theme}) => theme.m};
  }
`

const Navbar = ({open, handleBurgerClick}) => {
  console.log(handleBurgerClick)
  return (
    <Wrapper>
      <InnerWrapper>
        <a href="/">
          <LogoWrapper src={Logo} />
        </a>
        <Panel>
          <CardButon href="#">Card</CardButon>
          <Burger open={open} handleBurgerClick={handleBurgerClick} />
        </Panel>
      </InnerWrapper>
    </Wrapper>
  )
}

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleBurgerClick: PropTypes.func.isRequired,
}

export default Navbar
