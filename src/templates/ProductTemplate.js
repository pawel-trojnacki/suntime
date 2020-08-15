import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from '../components/Layout/Layout';
import SectionWrapper from '../components/Wrappers/SectionWrapper';
import { ImageGallery, ProductImg } from '../components/Product/Gallery';
import StickySection from '../components/Product/StickySection';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import { Price, OldPrice } from '../components/Product/Price';
import Button from '../components/Button/Button';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const StyledSectionWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: 10vh;
  margin-bottom: 100vh;
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const DetailsWrapper = styled.div`
  margin: 20px 0;
  @media (min-width: 1024px) {
    margin: 40px 0;
  }
`;

const DetailsParahraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.regular};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 60px;
  }
`;

const ProductTemplate = ({
  data: {
    product: {
      slug,
      id,
      name,
      price,
      promoprice,
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
    if (window.screen.width >= 1024) {
      gsap.to(stickySectionWrap.current, {
        scrollTrigger: {
          trigger: stickySection.current,
          pin: true,
          start: 'center center',
          end: wrapHeight,
        },
      });
    }
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
            <Heading as="h1" margin="20px 0">
              {name}
            </Heading>
            {promoprice && (
              <OldPrice margin="0 20px 0 0" big>{`$${price}`}</OldPrice>
            )}
            <Price margin="0 20px 0 0" big>{`$${
              promoprice ? promoprice : price
            }`}</Price>
            <Paragraph align="justify" margin="20px 0">
              {desc}
            </Paragraph>
            <DetailsWrapper>
              <DetailsParahraph small>{`shape: ${shape}`}</DetailsParahraph>
              <DetailsParahraph
                small
              >{`lenses color: ${lensesColor}`}</DetailsParahraph>
              <DetailsParahraph
                small
              >{`frame color: ${frameColor}`}</DetailsParahraph>
            </DetailsWrapper>
            <ButtonWrapper>
              <Button
                big
                className="snipcart-add-item"
                data-item-id={id}
                data-item-price={promoprice ? promoprice : price}
                data-item-url={`https://suntime.netlify.app/products/${slug}`}
                data-item-name={name}
              >
                Add to cart
              </Button>
            </ButtonWrapper>
          </StickySection>
        </StyledSectionWrapper>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetProduct($slug: String) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      slug
      id
      name
      price
      promoprice
      slug
      desc
      shape
      frameColor
      lensesColor
      images {
        fluid(maxWidth: 800) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`;

export default ProductTemplate;
