import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import gsap from 'gsap'

import {pages} from '../../constants/pages'

const ImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  z-index: 2;
  height: 100vh;
  transform: ${({open}) =>
    open ? 'translateY(0) scaleY(1)' : 'translateY(-140%) scaleY(1.5)'};
  transition: transform 0.6s ease-out;
  transform-origin: center;
  overflow: hidden;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`

const NavWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  z-index: 2;
  transform: ${({open}) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.7s ease-out 0.1s;
  background: ${({theme}) => theme.beige};
`

const ListItem = styled.li`
  list-style: none;
`

const StyledAniLink = styled(AniLink)`
  display: inline-block;
  position: relative;
  margin: 1vh 0;
  padding: 1vh;
  text-decoration: none;
  color: ${({theme, isactive}) =>
    isactive === 'isActive' ? theme.black : theme.grey};
  font-weight: ${({theme}) => theme.regular};
  font-family: ${({theme}) => theme.headingFont};
  font-size: ${({theme}) => theme.xl};
  transform: ${({open}) => (open ? 'translateY(0)' : 'translateY(50%)')};
  opacity: ${({open}) => (open ? '1' : '0')};
  transition: transform 0.3s ease 0.7s, opacity 0.3 ease 0.7s, color 0.3s;

  &:hover {
    color: ${({theme}) => theme.black};
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    background-color: ${({theme}) => theme.beige};
    transform: ${({open}) => (open ? 'scaleY(0)' : 'scaleY(1)')};
    transform-origin: top;
    transition: all 0.5s ease 0.7s;
  }
`

const Menu = ({open}) => {
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : ''

  let initial = pages.find(page => page.path === pagePath)
  if (!initial) {
    initial = pages[0]
  }

  const [featuredImg, setFeaturedImg] = useState(initial.image)

  const animeImg = useRef(null)

  useEffect(() => {
    gsap.from(animeImg.current, {
      scaleX: 1.15,
      scaleY: 1.15,
      duration: 0.5,
    })
  }, [featuredImg])

  const unHover = () => {
    gsap.to(animeImg.current, {
      scaleX: 1,
      scaleY: 1,
    })
  }

  return (
    <>
      <ImageWrapper open={open}>
        <Image src={featuredImg} open={open} ref={animeImg} />
      </ImageWrapper>
      <NavWrapper open={open}>
        <ul>
          {pages.map(({name, path, image}) => {
            return (
              <ListItem key={name}>
                <StyledAniLink
                  open={open}
                  isactive={path === pagePath ? 'isActive' : 'isNotActive'}
                  to={path}
                  onMouseEnter={() => setFeaturedImg(image)}
                  onMouseLeave={unHover}
                >
                  {name}
                </StyledAniLink>
              </ListItem>
            )
          })}
        </ul>
      </NavWrapper>
    </>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default Menu
