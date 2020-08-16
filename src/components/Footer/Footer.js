import React from 'react';
import styled from 'styled-components';

import { footerLinks } from '../../constants/footerLinks';
import Paragraph from '../Paragraph/Paragraph';
import LogoWrapper from '../LogoWrapper/LogoWrapper';
import Logo from '../../images/logo_white.svg';
import NewsletterSection from '../NewsletterSection/NewsletterSection';

const SubFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};
  margin: 0;
  padding: 0;
`;

const InnerWrapper = styled.div`
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 50%;
  padding: 10px 20px;

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const LastColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const StyledTitle = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.regular};
  margin-bottom: 14px;
`;

const StyledParagraph = styled(Paragraph)`
  display: block;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <footer>
      <NewsletterSection />
      <SubFooter>
        <InnerWrapper>
          {footerLinks.map(({ heading, links }) => {
            return (
              <Column key={heading}>
                <StyledTitle as="h3" white>
                  {heading}
                </StyledTitle>
                {links.map(({ name, link }) => {
                  return (
                    <StyledParagraph white small key={name} as="a" href={link}>
                      {name}
                    </StyledParagraph>
                  );
                })}
              </Column>
            );
          })}
          <LastColumn>
            <a href="/">
              <LogoWrapper src={Logo} alt="suntime.com" />
            </a>
            <Paragraph
              small
              white
              align="center"
              margin="20px 0 10px 0"
            >{`Copyright ${new Date().getFullYear()} Suntime. All rights reserved.`}</Paragraph>
            <StyledTitle small white align="center">
              By Paweł Trojnacki
            </StyledTitle>
          </LastColumn>
        </InnerWrapper>
      </SubFooter>
    </footer>
  );
};

export default Footer;
