import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import Heading from '../Heading/Heading';
import { Price, PromoPrice } from './Price';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Wrapper = styled.li`
  width: 100%;
  margin: 0 0 30px 0;
  padding: 10px;

  @media (min-width: 768px) {
    width: 33%;
  }

  @media (min-width: 1024px) {
    padding: 10px 20px;
  }
`;

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
  transform: scale(1.5);
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

const OverlayImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: right;
  background-color: ${({ theme }) => theme.white};
`;

const PriceWrapper = styled.div`
  text-align: center;
  opacity: 0;
`;

const StyledHeading = styled(Heading)`
  opacity: 0;
`;

const ProductCard = ({ name, slug, image, secondImage, price, promoPrice }) => {
  const animeWrapper = useRef(null);
  const animeImg = useRef(null);
  const animeImgOverlay = useRef(null);
  const animeHeading = useRef(null);
  const animePrice = useRef(null);

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  const tl3 = gsap.timeline({ defaults: { duration: 1, delay: 0.5 } });

  useEffect(() => {
    tl.fromTo(
      animeImg.current,
      { scaleX: 1.5, scaleY: 1.5 },
      { scaleX: 1, scaleY: 1, duration: 1 }
    );
    ScrollTrigger.create({
      animation: tl,
      trigger: animeWrapper.current,
      start: 'top center',
    });
  }, [tl]);

  useEffect(() => {
    tl2.fromTo(
      animeImgOverlay.current,
      {
        scaleX: 1,
      },
      {
        scaleX: 0,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    ScrollTrigger.create({
      animation: tl2,
      trigger: animeWrapper.current,
      start: 'top center',
    });
  }, [tl2]);

  useEffect(() => {
    tl3
      .fromTo(
        animeHeading.current,
        { y: '10px', opacity: 0 },
        { y: '0px', opacity: 1 }
      )
      .fromTo(
        animePrice.current,
        { y: '10px', opacity: 0 },
        { y: '0px', opacity: 1, delay: -0.5 }
      );

    ScrollTrigger.create({
      animation: tl3,
      trigger: animeWrapper.current,
      start: 'bottom bottom',
    });
  }, [tl3]);

  return (
    <Wrapper ref={animeWrapper}>
      <AniLink
        to={`/products/${slug}`}
        cover
        bg={({ theme }) => theme.beige}
        direction="bottom"
        duration={2}
      >
        <ImageWrapper>
          <ImageInnerWrapper ref={animeImg}>
            <StyledImg fluid={image} />
            <StyledImg fluid={secondImage} />
          </ImageInnerWrapper>
          <OverlayImg ref={animeImgOverlay} />
        </ImageWrapper>
      </AniLink>
      <StyledHeading
        as="h3"
        xsmall
        margin="20px 0 0px 0"
        align="center"
        ref={animeHeading}
      >
        {name}
      </StyledHeading>
      <PriceWrapper ref={animePrice}>
        {promoPrice && <PromoPrice>{`$${promoPrice}`}</PromoPrice>}
        <Price>{`$${price}`}</Price>
      </PriceWrapper>
    </Wrapper>
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
