import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import Heading from '../components/Heading/Heading';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import SEO from '../components/SEO/seo';

const NotFoundWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" />
      <NotFoundWrapper>
        <Heading as="h1">Page not found</Heading>
        <Button
          as={AniLink}
          to="/"
          cover
          bg="#ffe0c5"
          direction="bottom"
          duration={2}
          big
        >
          Homepage
        </Button>
      </NotFoundWrapper>
    </Layout>
  );
};

export default NotFoundPage;
