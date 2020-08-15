import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImageGallery = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
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
