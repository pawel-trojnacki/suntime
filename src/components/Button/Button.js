import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: block;
  border: none;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  width: 120px;
  padding: 14px;
  font-size: ${({ theme }) => theme.xxs};
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 4px;
  transition: color 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 1024px) {
    width: 140px;
    padding: 16px;
    font-size: ${({ theme }) => theme.xs};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.lightGrey};
    outline: none;
  }

  ${({ big }) => {
    return (
      big &&
      css`
        width: 160px;
        @media (min-width: 768px) {
          width: 200px;
        }
      `
    );
  }}
`;

Button.propTypes = {
  big: PropTypes.bool,
};

Button.defaultProps = {
  big: false,
};

export default Button;
