import React from 'react';
import Layout from '../components/Layout/Layout';

import HeroSection from '../components/Headers/HeroSection';

import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading margin="60px 0" align="center">
        homepage Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet.
      </Heading>
      <Heading small>Lorem ipsum</Heading>
      <Heading xsmall>Lorem ipsum</Heading>
      <Heading secondary>About</Heading>
      <Button>Contact</Button>

      <Button big>Add to cart</Button>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Atque excepturi vitae voluptates eligendi quidem, esse debitis,
        molestiae quibusdam maiores reprehenderit laborum reiciendis mollitia
        nisi! Fugit consectetur recusandae aliquid minima id nihil praesentium
        maxime? Dolore magni voluptate error dolores illum in.
      </Paragraph>
      <Paragraph small align="justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Atque excepturi vitae voluptates eligendi quidem, esse debitis,
        molestiae quibusdam maiores reprehenderit laborum reiciendis mollitia
        nisi! Fugit consectetur recusandae aliquid minima id nihil praesentium
        maxime? Dolore magni voluptate error dolores illum in.
      </Paragraph>
    </Layout>
  );
};

export default IndexPage;
