import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Headers/PageHeader';
import FlexWrapper from '../components/Wrappers/FlexWrapper';
import HeaderImage from '../components/Headers/HeaderImage';
import Image from '../images/nav-images/contact.jpg';
import ContentWrapper from '../components/Wrappers/ContentWrapper';
import Form from '../components/Forms/Form';

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader pageName="Contact" title="Say hello to Suntime" />
      <FlexWrapper>
        <HeaderImage image={Image} width="50%" height="80vh" margin="0" />
        <ContentWrapper position="right">
          <Form
            formAction="https://formspree.io/mdowjvky"
            // newsletter
          />
        </ContentWrapper>
      </FlexWrapper>
    </Layout>
  );
};

export default ContactPage;
