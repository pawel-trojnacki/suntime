import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavLink = styled(AniLink)`
  display: inline-block;
  position: relative;
  margin: 1vh 0;
  padding: 1vh;
  text-decoration: none;
  color: ${({ theme, isactive }) =>
    isactive === 'isActive' ? theme.black : theme.grey};
  font-weight: ${({ theme }) => theme.regular};
  font-family: ${({ theme }) => theme.headingFont};
  font-size: ${({ theme }) => theme.xl};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(50%)')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: transform 0.3s ease 0.7s, opacity 0.3 ease 0.7s, color 0.3s;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.xxl};
  }

  &:hover {
    color: ${({ theme }) => theme.black};
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    background-color: ${({ theme }) => theme.beige};
    transform: ${({ open }) => (open ? 'scaleY(0)' : 'scaleY(1)')};
    transform-origin: top;
    transition: all 0.5s ease 0.7s;
  }
`;

export default NavLink;
