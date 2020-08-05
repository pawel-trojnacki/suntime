import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

export const Price = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.regular};
  display: inline-block;
  text-align: center;
  margin: 0 10px;
`;

export const PromoPrice = styled(Price)`
  color: ${({ theme }) => theme.grey};
  text-decoration: line-through;
`;
