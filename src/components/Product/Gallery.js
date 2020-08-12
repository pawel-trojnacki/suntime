import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImageGallery = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled(Img)`
  height: 800px;
  object-fit: cover;
  object-position: top;
  margin-bottom: 20px;
`;
