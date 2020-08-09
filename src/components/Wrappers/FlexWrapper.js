import styled from 'styled-components';
import SectionWrapper from './SectionWrapper';

const FlexWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default FlexWrapper;
