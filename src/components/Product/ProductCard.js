import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import Column from '../Column/Column';
import Heading from '../Heading/Heading';
import { Price, OldPrice } from './Price';

const ImageWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  width: 85%;
  overflow: hidden;
  @media (min-width: 420px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const ImageInnerWrapper = styled.div`
  /* transform: scale(1.5); */
  position: relative;
  overflow: hidden;
  height: 300px;
  @media (min-width: 420px) {
    height: 400px;
  }

  div {
    cursor: pointer;
    transform-origin: right;
    transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
  }

  div:nth-child(2) {
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: -1;
    transform-origin: left;
    transform: scaleX(1.3);
  }

  &:hover {
    div:nth-child(1) {
      transform: scaleX(1.3);
      opacity: 0;
    }
    div:nth-child(2) {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;

const StyledImg = styled(Img)`
  display: block;
  margin: 0 auto;
  object-fit: cover;
  object-position: top;
  height: 350px;
  width: 100%;
  @media (min-width: 420px) {
    height: 400px;
  }
`;

const PriceWrapper = styled.div`
  text-align: center;
`;

const ProductCard = ({ name, slug, image, secondImage, price, promoPrice }) => {
  return (
    <Column>
      <AniLink
        to={`/products/${slug}`}
        cover
        bg={({ theme }) => theme.beige}
        direction="bottom"
        duration={2}
      >
        <ImageWrapper>
          <ImageInnerWrapper>
            <StyledImg fluid={image} />
            <StyledImg fluid={secondImage} />
          </ImageInnerWrapper>
        </ImageWrapper>
      </AniLink>
      <Heading as="h3" xsmall margin="20px 0 0px 0" align="center">
        {name}
      </Heading>
      <PriceWrapper>
        {promoPrice && <OldPrice big>{`$${price}`}</OldPrice>}
        <Price big>{`$${promoPrice ? promoPrice : price}`}</Price>
      </PriceWrapper>
    </Column>
  );
};

const { string, number, object } = PropTypes;

ProductCard.propTypes = {
  name: string.isRequired,
  image: object.isRequired,
  secondImage: object.isRequired,
  price: number.isRequired,
  promoPrice: number,
};

ProductCard.defaultProps = {
  name: 'Model Name',
  price: 1000,
};

export default ProductCard;
