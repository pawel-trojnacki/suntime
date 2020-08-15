import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const TransitionSection = styled.div`
  position: relative;
  overflow-x: hidden;
  margin: 5vh 0;
  @media (min-width: 1024px) {
    margin: 7vh 0 10vh;
  }
`;

const BeforeImage = styled.div`
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
    object-position: top;
  }
`;

const AfterImage = styled(BeforeImage)`
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);

  img {
    transform: translate(-100%, 0px);
  }
`;

const ImageTransitionSection = ({ beforeImg, afterImg }) => {
  const animeTransitionSection = useRef(null);
  const animeAfterImage = useRef(null);

  useEffect(() => {
    const [animeTransitionImg] = animeAfterImage.current.children;

    gsap.utils.toArray(animeTransitionSection.current).forEach(section => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: () => '+=' + section.offsetWidth,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: 'none' },
      });
      tl.fromTo(
        animeAfterImage.current,
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      ).fromTo(
        animeTransitionImg,
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      );
    });
  }, []);
  return (
    <TransitionSection ref={animeTransitionSection}>
      <BeforeImage className="before-image">
        <img src={beforeImg} alt="Lorem ipsum" />
      </BeforeImage>
      <AfterImage className="after-image" ref={animeAfterImage}>
        <img src={afterImg} alt="Lorem ipsum" />
      </AfterImage>
    </TransitionSection>
  );
};

const { string } = PropTypes;

ImageTransitionSection.propTypes = {
  beforeImg: string.isRequired,
  afterImg: string.isRequired,
};

export default ImageTransitionSection;
