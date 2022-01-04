import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid ${({ theme }) => theme.colors.accent};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px;
  padding: 18px;

  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;
