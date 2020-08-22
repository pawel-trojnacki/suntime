import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Headers/PageHeader';
import HeaderImage from '../components/Headers/HeaderImage';
import Image from '../images/header-images/shop-header.jpg';
import Button from '../components/Button/Button';
import SectionWrapper from '../components/Wrappers/SectionWrapper';
import ColumnList from '../components/Column/ColumnList';
import ProductCard from '../components/Product/ProductCard';

import SEO from '../components/SEO/seo';
import { filters } from '../constants/filters';

const allValue = filters[0];

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme, option, selected }) =>
    option === selected ? theme.black : theme.grey};
  width: 80px;
  padding: 12px 14px;
  margin: 0 6px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.black};
  }

  @media (min-width: 768px) {
    padding: 14px;
    margin: 0 10px;
    width: 100px;
  }
`;

const Shop = () => {
  const { allDatoCmsProduct } = useStaticQuery(
    graphql`
      query {
        allDatoCmsProduct(sort: { fields: [meta___publishedAt], order: DESC }) {
          nodes {
            name
            slug
            price
            promoprice
            sex
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

  const [selected, setSelected] = useState(allValue);

  return (
    <Layout>
      <main>
        <SEO title="Shop" />
        <PageHeader pageName="Shop" title="Choose your sunglasses" />
        <HeaderImage image={Image} />
        <SectionWrapper>
          <FilterWrapper>
            {filters.map(filter => {
              return (
                <StyledButton
                  key={filter}
                  option={filter}
                  selected={selected}
                  onClick={() => setSelected(filter)}
                >
                  {filter}
                </StyledButton>
              );
            })}
          </FilterWrapper>
          <ColumnList>
            {allDatoCmsProduct.nodes.map(
              ({ name, slug, images, price, promoprice, sex }) => {
                if (selected === allValue) {
                  return (
                    <ProductCard
                      key={name}
                      slug={slug}
                      image={images[0].fluid}
                      secondImage={images[1].fluid}
                      name={name}
                      price={price}
                      promoPrice={promoprice}
                    />
                  );
                }
                return sex === selected ? (
                  <ProductCard
                    key={name}
                    slug={slug}
                    image={images[0].fluid}
                    secondImage={images[1].fluid}
                    name={name}
                    price={price}
                    promoPrice={promoprice}
                  />
                ) : null;
              }
            )}
          </ColumnList>
        </SectionWrapper>
      </main>
    </Layout>
  );
};

export default Shop;
