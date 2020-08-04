import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Paraghraph = styled.p`
  margin: ${({ margin }) => (margin ? margin : '10px 0px')};
  padding: ${({ padding }) => (padding ? padding : 0)};
  font-size: ${({ theme }) => theme.xs};
  line-height: ${({ theme }) => theme.lineHeightL};
  text-align: ${({ align }) => (align ? align : 'left')};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.sm};
  }

  ${({ small }) => {
    return (
      small &&
      css`
        font-size: ${({ theme }) => theme.xxs};
        line-height: ${({ theme }) => theme.lineHeightM};
        @media (min-width: 768px) {
          font-size: ${({ theme }) => theme.s};
        }
      `
    );
  }}

  ${({ white }) => {
    return (
      white &&
      css`
        color: ${({ theme }) => theme.white};
      `
    );
  }}
`;

const { bool, oneOf, oneOfType } = PropTypes;

Paraghraph.propTypes = {
  small: bool,
  white: bool,
  align: oneOf(['left', 'right', 'center', 'justify', null]),
  margin: oneOfType([PropTypes.string, PropTypes.bool]),
  padding: oneOfType([PropTypes.string, PropTypes.bool]),
};

Paraghraph.defaultProps = {
  small: false,
  white: false,
  align: null,
  margin: null,
  padding: null,
};

export default Paraghraph;
