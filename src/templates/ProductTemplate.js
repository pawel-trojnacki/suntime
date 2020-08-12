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
import { Price, PromoPrice } from '../components/Product/Price';
import Button from '../components/Button/Button';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const StyledSectionWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: 10vh;
  margin-bottom: 100vh;
`;

const PriceWrapper = styled.div`
  display: flex;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.regular};
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
            <Heading small as="h1">
              {name}
            </Heading>
            <PriceWrapper>
              {promoprice && (
                <PromoPrice
                  margin="0 20px 0 0"
                  big
                >{`$${promoprice}`}</PromoPrice>
              )}
              <Price margin="0 20px 0 0" big>{`$${price}`}</Price>
            </PriceWrapper>
            <Paragraph align="justify" margin="20px 0">
              {desc}
            </Paragraph>
            <StyledParagraph small>{`shape: ${shape}`}</StyledParagraph>
            <StyledParagraph
              small
            >{`lenses color: ${lensesColor}`}</StyledParagraph>
            <StyledParagraph
              small
            >{`frame color: ${frameColor}`}</StyledParagraph>
            <ActionsWrapper>
              <Paragraph big>Secect size</Paragraph>
              <Button
                big
                className="snipcart-add-item"
                data-item-id={id}
                data-item-price={promoprice ? promoprice : price}
                data-item-url={`/products/${slug}`}
                data-item-name={name}
              >
                Add to cart
              </Button>
            </ActionsWrapper>
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
