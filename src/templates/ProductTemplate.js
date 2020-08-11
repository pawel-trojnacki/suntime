import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/Layout';

const ProductTemplate = ({
  data: {
    product: { slug, name, price, desc, shape, frameColr, lensesColor, images },
  },
}) => {
  return (
    <Layout>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <h1>{desc}</h1>
      {images.map(({ fluid }) => {
        return <Img fluid={fluid} />;
      })}
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
