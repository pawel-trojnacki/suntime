import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Headers/PageHeader';
import HeaderImage from '../components/Headers/HeaderImage';
import Image from '../images/header-images/shop-header.jpg';
import Button from '../components/Button/Button';
import SectionWrapper from '../components/Wrappers/SectionWrapper';
import ProductList from '../components/Product/ProductList';
import ProductCard from '../components/Product/ProductCard';

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  /* margin-bottom: 60vh; */
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

  const [selected, setSelected] = useState('all');

  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <Layout>
      <PageHeader pageName="Shop" title="Choose your sunglasses" />
      <HeaderImage image={Image} />
      <SectionWrapper>
        <FilterWrapper>
          <StyledButton
            option="all"
            selected={selected}
            onClick={() => setSelected('all')}
          >
            All
          </StyledButton>
          <StyledButton
            option="man"
            selected={selected}
            onClick={() => setSelected('man')}
          >
            Man
          </StyledButton>
          <StyledButton
            option="woman"
            selected={selected}
            onClick={() => setSelected('woman')}
          >
            Woman
          </StyledButton>
        </FilterWrapper>
        <ProductList>
          {allDatoCmsProduct.nodes.map(
            ({ name, images, price, promoprice, sex }) => {
              if (selected === 'all') {
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
              return sex === selected ? (
                <ProductCard
                  key={name}
                  image={images[0].fluid}
                  secondImage={images[1].fluid}
                  name={name}
                  price={price}
                  promoPrice={promoprice}
                />
              ) : null;
            }
          )}
        </ProductList>
      </SectionWrapper>
    </Layout>
  );
};

export default Shop;
