import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Heading from '../Heading/Heading';

const headingAnimation = keyframes`
    0% {
        transform: scaleY(1)
    }
    100% {
        transform: scaleY(0)
    }
`;

const HeaderWrapper = styled.header`
  max-width: 1024px;
  margin: 120px auto 80px;
  padding: 0 20px;

  h1,
  p {
    position: relative;
    ::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.white};
      transform-origin: top;
    }
  }

  h1 {
    ::after {
      animation: ${headingAnimation} 0.5s forwards ease-in-out 0.5s;
    }
  }

  p {
    ::after {
      animation: ${headingAnimation} 1s forwards ease-in-out 0.5s;
    }
  }
`;

const StyledPageHeading = styled(Heading)`
  span {
    display: block;
    position: relative;
    ::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.white};
      transform-origin: top;
      animation: ${headingAnimation} 1s forwards ease-in-out 0.5s;
    }

    :nth-of-type(2) {
      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.white};
        transform-origin: top;
        animation: ${headingAnimation} 1s forwards ease-in-out 1s;
      }
    }
  }
`;

const PageHeader = ({ pageName, title, continuedTitle }) => {
  return (
    <HeaderWrapper>
      <Heading secondary as="h1" margin="0 0 20px 0">
        {pageName}
      </Heading>
      {continuedTitle ? (
        <StyledPageHeading align="center" as="p" margin="0">
          <span>{title}</span>
          <span>{continuedTitle}</span>
          {/* {title} <br /> {continuedTitle} */}
        </StyledPageHeading>
      ) : (
        <Heading align="center" as="p" margin="0">
          {title}
        </Heading>
      )}
    </HeaderWrapper>
  );
};

const { string } = PropTypes;

PageHeader.propTyped = {
  pageName: string.isRequired,
  title: string.isRequired,
  continuedTitle: string,
};

PageHeader.defaultProps = {
  pageNaame: 'Page Name',
  title: 'Title',
};

export default PageHeader;
