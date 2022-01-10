import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px;
  padding: 18px;
  transition: all ease-in 0.2s;
  width: ${({ width }) => width};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
    color: white;
  }
`;

export default StyledButton;
