import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

const Number = styled(Paragraph)`
  font-family: ${({ theme }) => theme.headingFont};
  font-weight: ${({ theme }) => theme.regular};
  line-height: ${({ theme }) => theme.lineHeightXs};
  color: ${({ theme }) => theme.beige};
  font-size: ${({ theme }) => theme.xxxl};
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.xxxxl};
  }
`;

export default Number;
