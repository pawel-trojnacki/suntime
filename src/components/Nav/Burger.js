import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  height: 18px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    height: 2px;
    width: 50px;
    background-color: ${({theme}) => theme.black};
    transition: all 0.5s ease;

    &:first-child {
      transform: ${({open}) => open && 'translateY(7px)'};
      opacity: ${({open}) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: scaleX(0.5);
      transform-origin: right;
      transform: ${({open}) => open && 'translateY(-7px)'};
      opacity: ${({open}) => (open ? 0 : 1)};
    }
  }

  &:hover,
  &:focus {
    span {
      &:nth-child(3) {
        transform: scaleX(1);
        transform: ${({open}) => open && 'translateY(-7px)'};
        opacity: ${({open}) => (open ? 0 : 1)};
      }
    }
  }
`;

const Burger = ({open, handleBurgerClick}) => {
  return (
    <StyledButton open={open} onClick={handleBurgerClick}>
      <span></span>
      <span></span>
      <span></span>
    </StyledButton>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  handleBurgerClick: PropTypes.func.isRequired,
};

export default Burger;
