import styled, { css } from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

export const Price = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.regular};
  font-family: ${({ theme }) => theme.headingFont};
  display: inline-block;
  text-align: center;
  ${({ margin }) =>
    !margin &&
    css`
      margin: 0 10px;
    `}
`;

export const OldPrice = styled(Price)`
  color: ${({ theme }) => theme.grey};
  text-decoration: line-through;
`;
