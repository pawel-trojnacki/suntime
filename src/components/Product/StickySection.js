import styled from 'styled-components';

const StickySection = styled.div`
  margin-bottom: 50px;
  @media (min-width: 1024px) {
    position: absolute;
    height: 800px;
    top: 0;
    right: 0;
    width: 50%;
    margin: 0;
    padding: 30px 20px 0 50px;
  }
`;

export default StickySection;
