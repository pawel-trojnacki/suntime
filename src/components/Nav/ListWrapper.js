import styled from 'styled-components';

const ListWrapper = styled.nav`
  display: ${({open}) => (open ? 'block' : 'none')};
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  transform: ${({open}) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.7s ease-out 0.1s;
  background: ${({theme}) => theme.beige};

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export default ListWrapper;
