import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Headers/HeroSection';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';
import SectionWrapper from '../components/Wrappers/SectionWrapper';
import ProductList from '../components/Product/ProductList';
import ProductCard from '../components/Product/ProductCard';
import FlexWrapper from '../components/Wrappers/FlexWrapper';
import ContentWrapper from '../components/Wrappers/ContentWrapper';
import ImagesSection from '../components/ImagesSection/ImagesSection';
import ImageTransitionSection from '../components/ImageTransitionSection/ImageTransitionSection';
import BeforeImg from '../images/transition-images/1.jpg';
import AfterImg from '../images/transition-images/2.jpg';
import FirstImage from '../images/section-images/homepage-1.jpg';
import SecondImage from '../images/section-images/homepage-2.jpg';

const StyledButton = styled(Button)`
  margin: 40px 0 40px auto;

  @media (min-width: 1024px) {
    margin: 40px auto 40px 0;
  }
`;

const IndexPage = () => {
  const { allDatoCmsProduct } = useStaticQuery(
    graphql`
      query {
        allDatoCmsProduct(
          limit: 3
          sort: { fields: [meta___publishedAt], order: DESC }
        ) {
          nodes {
            name
            price
            promoprice
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
      }
    `
  );
  return (
    <Layout>
      <HeroSection />
      <SectionWrapper>
        <Heading align="center">Recent products</Heading>
        <ProductList>
          {allDatoCmsProduct.nodes.map(
            ({ name, images, price, promoprice }) => {
              return (
                <ProductCard
                  key={name}
                  image={images[0].fluid}
                  secondImage={images[1].fluid}
                  name={name}
                  price={price}
                  promoPrice={promoprice}
                />
              );
            }
          )}
        </ProductList>
      </SectionWrapper>
      <ImageTransitionSection beforeImg={BeforeImg} afterImg={AfterImg} />
      <FlexWrapper>
        <ContentWrapper position="left">
          <Heading>Dispel the clouds with Suntime</Heading>
          <Paragraph align="justify">
            Before they sold out adaptogen artisan, subway tile unicorn
            asymmetrical sustainable pour-over tumeric pok pok squid. Direct
            trade tattooed polaroid vape viral plaid quinoa.
          </Paragraph>
          <StyledButton
            as={AniLink}
            to="/about"
            cover
            bg="#ffe0c5"
            direction="bottom"
            duration={2}
          >
            About
          </StyledButton>
        </ContentWrapper>
        <ImagesSection
          direction="right"
          firstImg={FirstImage}
          secondImg={SecondImage}
        />
      </FlexWrapper>
    </Layout>
  );
};

export default IndexPage;
