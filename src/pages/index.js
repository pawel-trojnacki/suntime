import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Headers/HeroSection';
import Heading from '../components/Heading/Heading';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import ProductList from '../components/Product/ProductList';
import ProductCard from '../components/Product/ProductCard';
import ImageTransitionSection from '../components/ImageTransitionSection/ImageTransitionSection';
import BeforeImg from '../images/transition-images/1.jpg';
import AfterImg from '../images/transition-images/2.jpg';

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
    </Layout>
  );
};

export default IndexPage;
