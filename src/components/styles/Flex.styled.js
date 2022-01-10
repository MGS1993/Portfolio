import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-evenly;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
