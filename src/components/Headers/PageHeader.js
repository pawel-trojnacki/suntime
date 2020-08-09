import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from '../Heading/Heading';

const HeaderWrapper = styled.header`
  max-width: 1024px;
  margin: 120px auto 80px;
  padding: 0 20px;
`;

const PageHeader = ({ pageName, title, continuedTitle }) => {
  return (
    <HeaderWrapper>
      <Heading secondary as="h1" margin="0 0 20px 0">
        {pageName}
      </Heading>
      {continuedTitle ? (
        <Heading align="center" as="p" margin="0">
          {title} <br /> {continuedTitle}
        </Heading>
      ) : (
        <Heading align="center" as="p" margin="0">
          {title}
        </Heading>
      )}
      {/* <Heading align="center" as="p" margin="0">
        {continuedTitle ? `${title} <br/> ${continuedTitle}` : { title }}
      </Heading> */}
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
