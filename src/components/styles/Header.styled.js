import styled from "styled-components";

export const StyledHeader = styled.header`
  align-items: center;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  font-weight: 500;
  justify-content: space-evenly;

  & > ul {
    display: flex;
    font-size: 1.6rem;
    justify-content: space-between;
    list-style: none;
  }

  & > ul > li {
    margin: 0 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const BurgerWrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;
