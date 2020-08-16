import styled from 'styled-components';

const ColumnList = styled.ul`
  list-style: none;
  list-style-type: none;
  padding: ${({ spaceBottom }) => (spaceBottom ? '0 0 50px 0' : 0)};
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${({ spaceBottom }) => (spaceBottom ? '0 0 80px 0' : 0)};
  }
`;

export default ColumnList;
