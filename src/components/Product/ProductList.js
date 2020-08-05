import styled from 'styled-components';

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  list-style-type: none;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default ProductList;
