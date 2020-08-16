import styled from 'styled-components';

const Column = styled.li`
  width: 100%;
  margin: 0 0 30px 0;
  padding: 10px;

  @media (min-width: 768px) {
    width: 33%;
  }

  @media (min-width: 1024px) {
    padding: 10px 20px;
  }
`;

export default Column;
