import styled from 'styled-components';

const ProductList = styled.ul`
  list-style: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export default ProductList;
