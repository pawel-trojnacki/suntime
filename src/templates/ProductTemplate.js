import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from '../components/Layout/Layout';
import SectionWrapper from '../components/Wrappers/SectionWrapper';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const StyledSectionWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: 10vh;
  margin-bottom: 100vh;
`;

const ImageGallery = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const ProductImg = styled(Img)`
  height: 800px;
  object-fit: cover;
  object-position: top;
  margin-bottom: 20px;
`;

const StickySection = styled.div`
  position: absolute;
  height: 800px;
  top: 0;
  right: 0;
  width: 50%;
  /* height: 100vh; */
  margin: 0;
  padding: 30px;
`;

const ProductTemplate = ({
  data: {
    product: {
      slug,
      name,
      price,
      desc,
      shape,
      frameColor,
      lensesColor,
      images,
    },
  },
}) => {
  const stickySection = useRef(null);
  const stickySectionWrap = useRef(null);

  useEffect(() => {
    const wrapHeight =
      stickySectionWrap.current.offsetHeight -
      (stickySection.current.offsetHeight - 130);
    gsap.to(stickySectionWrap.current, {
      scrollTrigger: {
        trigger: stickySection.current,
        pin: true,
        start: 'center center',
        end: wrapHeight,
      },
    });
  });

  return (
    <Layout>
      <main>
        <StyledSectionWrapper ref={stickySectionWrap}>
          <ImageGallery>
            {images.map(({ fluid }) => {
              return <ProductImg fluid={fluid} />;
            })}
          </ImageGallery>
          <StickySection ref={stickySection}>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{desc}</p>
            <p>{shape}</p>
            <p>{frameColor}</p>
            <p>{lensesColor}</p>
            <p>{desc}</p>
            <p>{desc}</p>
          </StickySection>
        </StyledSectionWrapper>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetProduct($slug: String) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      id
      name
      slug
      desc
      shape
      frameColor
      lensesColor
      price
      images {
        fluid(maxWidth: 800) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`;

export default ProductTemplate;
