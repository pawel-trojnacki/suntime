import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  height: 18px;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 60px;
    /* height: 18px; */
  }

  &:focus {
    outline: none;
  }

  span {
    height: 2px;
    width: 100%;
    background-color: ${({theme}) => theme.black};
    transition: all 0.5s ease;

    &:first-child {
      transform: ${({open}) => open && 'translateY(7px)'};
    }

    &:nth-child(3) {
      transform: scaleX(0.5);
      transform-origin: right;
    }
  }

  &:hover,
  &:focus {
    span {
      &:nth-child(3) {
        transform: scaleX(1);
        transform: ${({open}) => open && 'translateY(-7px)'};
      }
    }
  }
`

const Burger = ({open, handleBurgerClick}) => {
  console.log(open)
  console.log(handleBurgerClick)
  return (
    <StyledButton open={open} onClick={handleBurgerClick}>
      <span></span>
      <span></span>
      <span></span>
    </StyledButton>
  )
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  handleBurgerClick: PropTypes.func.isRequired,
}

export default Burger
