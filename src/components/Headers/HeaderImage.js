import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap, { Power2 } from 'gsap';

const HeaderImageWrapper = styled.div`
  margin: 10vh 0 10vh;
  position: relative;
  width: 100%;
  height: ${({ height }) => (height ? height : '70vh')};
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
    transform: scale(1.5);
  }
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: right;
  background-color: ${({ theme }) => theme.white};
`;

const HeaderImage = ({ image, height }) => {
  const animeHeaderImg = useRef(null);
  const animeHeaderOverlay = useRef(null);

  const tl = gsap.timeline({ defaults: { duration: 1, delay: 1 } });

  useEffect(() => {
    tl.to(animeHeaderImg.current, {
      scaleY: 1,
      scaleX: 1,
    }).to(animeHeaderOverlay.current, {
      scaleX: 0,
      delay: -1,
      ease: Power2.easeOut,
    });
  }, [tl]);

  return (
    <HeaderImageWrapper height={height}>
      <img src={image} alt="lorem ipsum" ref={animeHeaderImg} />
      <HeaderOverlay ref={animeHeaderOverlay} />
    </HeaderImageWrapper>
  );
};

HeaderImage.propTypes = {
  image: PropTypes.string,
  height: PropTypes.string,
};

export default HeaderImage;
