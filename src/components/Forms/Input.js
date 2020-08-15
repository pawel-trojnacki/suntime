import styled from 'styled-components';

const Input = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 50px;
  padding: 10px;
  outline: none;
  background-color: transparent;
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.grey};
  font-family: ${({ theme }) => theme.bodyFont};

  :focus {
    outline: 1px solid ${({ theme }) => theme.black};
  }
`;

export default Input;
