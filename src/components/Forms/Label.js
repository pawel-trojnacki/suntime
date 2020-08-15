import styled from 'styled-components';

const Label = styled.label`
  display: block;
  padding: 10px;
  margin: 0;
  font-family: ${({ theme }) => theme.bodyFont};
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.xxs};

  @media (min-width: 768px) {
  font-size: ${({ theme }) => theme.xs};

  }
  /* transform: ${({ focused }) =>
    focused ? 'translateY(0)' : 'translateY(calc(25px + 50%))'}; */
`;

export default Label;
