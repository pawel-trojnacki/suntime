import styled from 'styled-components';

const CartButton = styled.a`
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
`;

export default CartButton;
