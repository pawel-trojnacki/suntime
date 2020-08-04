import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  z-index: 2;
  height: 100vh;
  transform: ${({open}) =>
    open ? 'translateY(0) scaleY(1)' : 'translateY(-140%) scaleY(1.8)'};
  transition: transform 0.6s ease-out;
  transform-origin: center;
  overflow: hidden;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export default ImageWrapper;
