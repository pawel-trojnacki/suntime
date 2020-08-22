import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Headers/PageHeader';
import FlexWrapper from '../components/Wrappers/FlexWrapper';
import HeaderImage from '../components/Headers/HeaderImage';
import Image from '../images/nav-images/contact.jpg';
import ContentWrapper from '../components/Wrappers/ContentWrapper';
import Form from '../components/Forms/Form';
import SectionWrapper from '../components/Wrappers/SectionWrapper';
import ColumnList from '../components/Column/ColumnList';
import Column from '../components/Column/Column';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import SEO from '../components/SEO/seo';

import { contactDetails } from '../constants/contactDetails';

const IconWrapper = styled.div`
  height: 40px;
  width: 50px;
  margin: 20px auto 30px;
`;

const StyledImg = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main>
        <PageHeader pageName="Contact" title="Say hello to Suntime" />
        <FlexWrapper as="div">
          <HeaderImage image={Image} width="50%" height="80vh" margin="0" />
          <ContentWrapper position="right">
            <Form formAction="https://formspree.io/mdowjvky" />
          </ContentWrapper>
        </FlexWrapper>
        <SectionWrapper>
          <Heading align="center">Contact details</Heading>
          <ColumnList spaceBottom>
            {contactDetails.map(({ id, title, icon, details }) => (
              <Column key={id}>
                <IconWrapper>
                  <StyledImg src={icon} alt={title} />
                </IconWrapper>
                {details.map(element => (
                  <Paragraph align="center" key={element}>
                    {element}
                  </Paragraph>
                ))}
              </Column>
            ))}
          </ColumnList>
        </SectionWrapper>
      </main>
    </Layout>
  );
};

export default ContactPage;
