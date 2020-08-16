import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImageGallery = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 1024px) {
    height: 800px;
  }
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  z-index: 1;
  transform-origin: right;
`;

export const ProductImg = styled(Img)`
  object-fit: cover;
  object-position: top;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 1024px) {
    height: 800px;
  }
`;
