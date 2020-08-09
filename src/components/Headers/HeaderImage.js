import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const HeaderImageWrapper = styled.div`
  margin: 10vh 0 10vh;
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  img {
    display: block;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0%;
    top: 0;
  }
`;

const HeaderImage = ({ image }) => {
  const animeHeaderImg = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(animeHeaderImg.current, { scaleY: 1.3, scaleX: 1.3 });
    ScrollTrigger.create({
      animation: tl,
      trigger: animeHeaderImg.current,
      start: 'center center',
      scrub: 1.5,
      //   pin: true,
      //   end: '1200',
      toggleActions: 'restart none reverse none',
    });
  }, [tl]);

  return (
    <HeaderImageWrapper>
      <img src={image} alt="lorem ipsum" ref={animeHeaderImg} />
    </HeaderImageWrapper>
  );
};

export default HeaderImage;
