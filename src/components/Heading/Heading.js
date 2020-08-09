import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.headingFont};
  margin: ${({ margin }) => (margin ? margin : '40px 0')};
  text-align: ${({ align }) => (align ? align : 'left')};
  font-size: ${({ theme }) => theme.l};
  line-height: ${({ theme }) => theme.lineHeightS};
  font-weight: ${({ theme }) => theme.regular};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.xxl};
  }

  ${({ small }) => {
    return (
      small &&
      css`
        margin: ${({ margin }) => (margin ? margin : '20px 0')};
        font-size: ${({ theme }) => theme.l};
        @media (min-width: 768px) {
          font-size: ${({ theme }) => theme.xl};
        }
      `
    );
  }}

  ${({ xsmall }) => {
    return (
      xsmall &&
      css`
        margin: ${({ margin }) => (margin ? margin : '20px 0')};
        font-size: ${({ theme }) => theme.m};
        @media (min-width: 768px) {
          font-size: ${({ theme }) => theme.l};
        }
      `
    );
  }}

  ${({ secondary }) => {
    return (
      secondary &&
      css`
        font-family: ${({ theme }) => theme.bodyFont};
        font-weight: ${({ theme }) => theme.regular};
        font-size: ${({ theme }) => theme.xxs};
        text-transform: uppercase;
        letter-spacing: 12px;
        text-align: ${({ align }) => (align ? align : 'center')};
        @media (min-width: 768px) {
          font-size: ${({ theme }) => theme.s};
          letter-spacing: 16px;
        }
      `
    );
  }}
`;

const { bool, oneOf, oneOfType } = PropTypes;

Heading.propTypes = {
  margin: oneOfType([PropTypes.string, PropTypes.bool]),
  align: oneOf(['left', 'right', 'center', 'justify', null]),
  small: bool,
  xsmall: bool,
  secondary: bool,
};

Heading.defaultProps = {
  margin: null,
  align: null,
  small: false,
  xsmall: false,
  secondary: false,
};

export default Heading;
