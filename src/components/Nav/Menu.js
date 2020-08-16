import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { pages } from '../../constants/pages';
import NavLink from './NavLink';
import ImageWrapper from './ImageWrapper';
import ListWrapper from './ListWrapper';

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Menu = ({ open }) => {
  const pagePath =
    typeof window !== 'undefined' ? window.location.pathname : '';

  let initial = pages.find(page => page.path === pagePath);
  if (!initial) {
    initial = pages[0];
  }

  const [featuredImg, setFeaturedImg] = useState(initial.image);

  const animeImg = useRef(null);

  useEffect(() => {
    gsap.from(animeImg.current, {
      scaleX: 1.15,
      scaleY: 1.15,
      duration: 0.5,
    });
  }, [featuredImg]);

  const unHover = () => {
    gsap.to(animeImg.current, {
      scaleX: 1,
      scaleY: 1,
    });
  };

  return (
    <>
      <ImageWrapper open={open}>
        {pages.map(({ image, name }) => (
          <Image key={name} src={image} style={{ zIndex: -1 }} />
        ))}
        <Image src={featuredImg} alt="menu image" open={open} ref={animeImg} />
      </ImageWrapper>
      <ListWrapper open={open}>
        <ul>
          {pages.map(({ name, path, image }) => {
            return (
              <ListItem key={name}>
                <NavLink
                  open={open}
                  isactive={path === pagePath ? 'isActive' : 'isNotActive'}
                  cover
                  to={path}
                  bg="#ffe0c5"
                  direction="bottom"
                  duration={2}
                  onMouseEnter={() => setFeaturedImg(image)}
                  onMouseLeave={unHover}
                >
                  {name}
                </NavLink>
              </ListItem>
            );
          })}
        </ul>
      </ListWrapper>
    </>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Menu;
