import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap, { Power2 } from 'gsap';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import HeroImgMobile from '../../images/nav-images/home.jpg';
import HeroImgDesktop from '../../images/header-images/homepage-hero.jpg';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.xl};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.xxxl};
  }

  span {
    display: block;
    opacity: 0;
    transform: translateY(25%);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Hero = styled.div`
  height: 100vh;
  background-image: url(${HeroImgMobile});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  @media (min-width: 1024px) {
    background-image: url(${HeroImgDesktop});
  }
  transform: scaleX(1.4) scaleY(1.4);
`;

const InnerWrapper = styled.header`
  max-width: ${({ theme }) => theme.maxWidth};
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const StyledButton = styled(Button)`
  opacity: 0;
  transform: translateY(25%);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: right;
  background-color: ${({ theme }) => theme.white};
`;

export default function HeroSection() {
  const animeImg = useRef(null);
  const animeOverlay = useRef(null);
  const animeHeading = useRef(null);

  const tl = gsap.timeline({ defaults: { duration: 1.4, delay: 0.5 } });
  const tl2 = gsap.timeline({ defaults: { duration: 0.6, delay: 2 } });

  useEffect(() => {
    const [span1, span2] = [...animeHeading.current.children];
    const animeButton = document.querySelector('.hero-button');

    tl.to(animeImg.current, {
      scaleX: 1,
      scaleY: 1,
    }).to(animeOverlay.current, {
      scaleX: 0,
      delay: -1.5,
      ease: Power2.easeInOut,
    });

    tl2
      .to(span1, { opacity: 1, y: 0 })
      .to(span2, { opacity: 1, y: 0, delay: 0 })
      .to(animeButton, { opacity: 1, y: 0, delay: 0 });
  }, [tl, tl2]);

  return (
    <Wrapper>
      <Hero ref={animeImg}>
        <InnerWrapper>
          <StyledHeading
            ref={animeHeading}
            margin="50px 0"
            align="right"
            as="h1"
          >
            <span>All you need</span>
            <span>is smile and sun</span>
          </StyledHeading>
          <StyledButton
            as={AniLink}
            cover
            to="/shop"
            bg="#ffe0c5"
            direction="bottom"
            duration={2}
            className="hero-button"
          >
            Shop
          </StyledButton>
        </InnerWrapper>
        <Overlay ref={animeOverlay}></Overlay>
      </Hero>
    </Wrapper>
  );
}
