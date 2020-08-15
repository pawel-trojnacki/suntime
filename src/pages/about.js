import React from 'react';

import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Headers/PageHeader';
import HeaderImage from '../components/Headers/HeaderImage';
import Image from '../images/header-images/about-header.jpg';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import FlexWrapper from '../components/Wrappers/FlexWrapper';
import ContentWrapper from '../components/Wrappers/ContentWrapper';
import ImagesSection from '../components/ImagesSection/ImagesSection';
import ImageTransitionSection from '../components/ImageTransitionSection/ImageTransitionSection';
import FirstImage from '../images/section-images/about-1.jpg';
import SecondImage from '../images/section-images/about-2.jpg';
import BeforeImg from '../images/transition-images/1.jpg';
import AfterImg from '../images/transition-images/2.jpg';

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader
        pageName="About"
        title="Express your style"
        continuedTitle="in the rays of the sun"
      />
      <HeaderImage image={Image} height="100vh" />
      <FlexWrapper>
        <ImagesSection
          direction="left"
          firstImg={FirstImage}
          secondImg={SecondImage}
        />
        <ContentWrapper>
          <Heading>Cool design and best quality</Heading>
          <Paragraph align="justify">
            Before they sold out adaptogen artisan, subway tile unicorn
            asymmetrical sustainable pour-over tumeric pok pok squid. Direct
            trade tattooed polaroid vape viral plaid quinoa.
          </Paragraph>
        </ContentWrapper>
      </FlexWrapper>
      <ImageTransitionSection beforeImg={BeforeImg} afterImg={AfterImg} />
    </Layout>
  );
};

export default AboutPage;
