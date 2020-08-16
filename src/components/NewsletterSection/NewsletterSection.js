import React from 'react';
import styled from 'styled-components';

import FlexWrapper from '../Wrappers/FlexWrapper';
import ContentWrapper from '../Wrappers/ContentWrapper';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Form from '../Forms/Form';

const NewsletterSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.beige};
`;

const StyledFlexWrapper = styled(FlexWrapper)`
  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  @media (max-width: 1023px) {
    padding: 0 20px 20px;
  }
`;

const NewsletterSection = () => {
  return (
    <NewsletterSectionWrapper>
      <StyledFlexWrapper>
        <StyledContentWrapper position="left">
          <Heading>Join our newsletter</Heading>
          <Paragraph align="justify">
            ...to be the first, who blah blah. Organic tumblr hammock beard banh
            mi. Raw denim fanny pack deep v, echo park salvia kinfolk man braid
            portland adaptogen cronut yr distillery etsy.
          </Paragraph>
        </StyledContentWrapper>
        <ContentWrapper positon="right">
          <Form newsletter />
        </ContentWrapper>
      </StyledFlexWrapper>
    </NewsletterSectionWrapper>
  );
};

export default NewsletterSection;
