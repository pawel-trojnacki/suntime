import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import Heading from '../Heading/Heading';
import { Price, PromoPrice } from './Price';
import Overlay from '../Overlay/Overlay';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Wrapper = styled.li`
  width: 100%;
  margin: 0 0 30px 0;
  padding: 10px;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ImageInnerWrapper = styled.div`
  transform: scale(1.5);
`;

const StyledImg = styled(Img)`
  display: block;
  margin: 0 auto;
  height: 300px;
  object-fit: cover;
  object-position: top;
  cursor: pointer;
  @media (min-width: 760px) {
    height: 400px;
  }
`;

const PriceWrapper = styled.div`
  text-align: center;
`;

const ProductCard = ({ name, fluid, price, promoPrice }) => {
  const animeImg = useRef(null);
  const animeOverlay = useRef(null);
  const animeHeading = useRef(null);
  const animePrice = useRef(null);

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  const tl3 = gsap.timeline({ defaults: { duration: 1, delay: 0.5 } });

  useEffect(() => {
    tl.to(animeImg.current, { scaleX: 1, scaleY: 1, duration: 1 });
    tl2.to(animeOverlay.current, {
      scaleX: 0,
      duration: 1,
      ease: Power2.easeInOut,
    });
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
      animation: tl,
      trigger: animeImg.current,
      start: 'top center',
    });

    ScrollTrigger.create({
      animation: tl2,
      trigger: animeOverlay.current,
      start: 'top center',
    });

    ScrollTrigger.create({
      animation: tl3,
      trigger: animeHeading.current,
      start: 'bottom bottom',
    });
  }, [tl, tl2, tl3]);

  //   useEffect(() => {
  //     secondImage &&
  //       new hoverEffect({
  //         parent: animeImg.current,
  //         image1: image,
  //         image2: secondImage,
  //         displacementImage:
  //           'https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/heightMap.png',
  //         intensity: 0.4,
  //         speedIn: 0.8,
  //         speedOut: 0.8,
  //       });
  //   }, [image, secondImage]);

  return (
    <Wrapper>
      <ImageWrapper>
        <AniLink
          to="/shop"
          cover
          bg={({ theme }) => theme.beige}
          direction="bottom"
          duration={2}
        >
          <ImageInnerWrapper ref={animeImg}>
            <StyledImg fluid={fluid} />
          </ImageInnerWrapper>
        </AniLink>
        <Overlay ref={animeOverlay} />
      </ImageWrapper>
      <Heading
        as="h3"
        xsmall
        margin="20px 0 0px 0"
        align="center"
        ref={animeHeading}
      >
        {name}
      </Heading>
      <PriceWrapper ref={animePrice}>
        {promoPrice && <PromoPrice>{`$${promoPrice}`}</PromoPrice>}
        <Price>{`$${price}`}</Price>
      </PriceWrapper>
    </Wrapper>
  );
};

const { string, number } = PropTypes;

ProductCard.propTypes = {
  name: string.isRequired,
  //   image: string.isRequired,
  //   secondImage: string,
  price: number.isRequired,
  promoPrice: number,
};

ProductCard.defaultProps = {
  name: 'Model Name',
  image:
    'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6',
  price: 1000,
};

export default ProductCard;
