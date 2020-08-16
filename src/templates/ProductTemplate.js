import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from '../components/Layout/Layout';
import SectionWrapper from '../components/Wrappers/SectionWrapper';
import {
  ImageGallery,
  GalleryOverlay,
  ImageWrapper,
  ProductImg,
} from '../components/Product/Gallery';
import StickySection from '../components/Product/StickySection';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import { Price, OldPrice } from '../components/Product/Price';
import Button from '../components/Button/Button';
import ColumnList from '../components/Column/ColumnList';
import ProductCard from '../components/Product/ProductCard';
import SEO from '../components/SEO/seo';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const StyledSectionWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: 10vh;
  margin-bottom: 10vh;
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
      related,
    },
  },
}) => {
  const stickySection = useRef(null);
  const stickySectionWrap = useRef(null);
  const animeOverlay = useRef(null);
  const animeImages = useRef(null);

  const tl = gsap.timeline({
    defaults: { ease: Power2.ease, duration: 1.2, delay: 1 },
  });

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

  useEffect(() => {
    tl.to(animeOverlay.current, { scaleX: 0 });
  }, [tl]);

  useEffect(() => {
    gsap.utils.toArray('.product-gallery-image').forEach(image => {
      gsap.fromTo(
        image,
        { scaleX: 1.5, scaleY: 1.5 },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 1.2,
          delay: 1,
          ease: Power2.ease,
        }
      );
    });
  }, []);

  useEffect(() => {
    let delay = 2;
    gsap.utils.toArray(stickySection.current.children).forEach(element => {
      delay += 0.2;
      gsap.fromTo(
        element,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: delay,
          ease: Power2.ease,
        }
      );
    });
  }, []);

  return (
    <Layout>
      <SEO title={name} />
      <main>
        <StyledSectionWrapper ref={stickySectionWrap}>
          <ImageGallery ref={animeImages}>
            {images.map(({ fluid }) => {
              return (
                <ImageWrapper>
                  <ProductImg className="product-gallery-image" fluid={fluid} />
                </ImageWrapper>
              );
            })}
            <GalleryOverlay ref={animeOverlay} />
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

        {related ? (
          <SectionWrapper>
            <Heading align="center">You may also like</Heading>
            <ColumnList>
              {related.map(
                ({
                  relatedName,
                  relatedSlug,
                  relatedImages,
                  relatedPrice,
                  relatedPromoPrice,
                }) => (
                  <ProductCard
                    key={relatedName}
                    name={relatedName}
                    slug={relatedSlug}
                    image={relatedImages[0].fluid}
                    secondImage={relatedImages[1].fluid}
                    price={relatedPrice}
                    promoPrice={relatedPromoPrice}
                  />
                )
              )}
            </ColumnList>
          </SectionWrapper>
        ) : null}
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
      related {
        relatedName: name
        relatedSlug: slug
        relatedImages: images {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
        relatedPrice: price
        relatedPromoPrice: promoprice
      }
    }
  }
`;

export default ProductTemplate;
