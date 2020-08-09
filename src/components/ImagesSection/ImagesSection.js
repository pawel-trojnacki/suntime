import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const ImagesSectionWrapper = styled.div`
  position: relative;
  min-height: 60vh;
  width: 100%;
  margin-bottom: 10vh;

  @media (min-width: 1024px) {
    min-height: 90vh;
    width: 50%;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  object-fit: cover;
  object-position: top;

  :nth-of-type(1) {
    top: 0;
    height: 100%;
    width: 78%;
    ${({ direction }) =>
      direction === 'left'
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `};
  }

  :nth-of-type(2) {
    top: 20%;
    height: 60%;
    width: 44%;
    ${({ direction }) =>
      direction === 'left'
        ? css`
            right: 0;
          `
        : css`
            left: 0;
          `};
    @media (min-width: 1024px) {
      top: 20%;
      transform: translateY(50%);
    }
  }
`;

const ImagesSection = ({ direction, firstImg, secondImg }) => {
  const animeImageSection = useRef(null);
  const animeSecondImg = useRef(null);

  useEffect(() => {
    if (window.screen.width >= 1024) {
      gsap.to(animeSecondImg.current, {
        yPercent: -50,
        scrollTrigger: {
          trigger: animeImageSection.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'restart pause reverse pause',
          id: 'scrub',
        },
      });
    }
  });
  return (
    <ImagesSectionWrapper ref={animeImageSection}>
      <StyledImg src={firstImg} direction={direction} alt="Lorem ipsum" />
      <StyledImg
        src={secondImg}
        direction={direction}
        alt="Lorem ipsum"
        ref={animeSecondImg}
      />
    </ImagesSectionWrapper>
  );
};

const { string, oneOf } = PropTypes;

ImagesSection.propTypes = {
  direction: oneOf(['left', 'right']).isRequired,
  firstImg: string,
  secondImg: string,
};

ImagesSection.defaulProps = {
  direction: 'left',
};

export default ImagesSection;
