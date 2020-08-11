import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 0 20px 40px;

  @media (min-width: 1024px) {
    width: 50%;
    padding: ${({ position }) =>
      position === 'left' ? '20px 150px 50px 0' : '20px 0 50px 150px'};
  }
`;

export default ContentWrapper;
