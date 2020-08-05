import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Headers/HeroSection';
import Heading from '../components/Heading/Heading';
// import Paragraph from '../components/Paragraph/Paragraph';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import ProductList from '../components/Product/ProductList';
import ProductCard from '../components/Product/ProductCard';
// import Button from '../components/Button/Button';

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
                ...GatsbyDatoCmsFluid
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
                  fluid={images[0].fluid}
                  // secondImage={images[1].url}
                  name={name}
                  price={price}
                  promoPrice={promoprice}
                />
              );
            }
          )}
        </ProductList>
      </SectionWrapper>
    </Layout>
  );
};

export default IndexPage;
