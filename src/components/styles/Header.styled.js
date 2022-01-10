import styled from "styled-components";

export const StyledHeader = styled.header`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
  }
`;

export const StyledNav = styled.nav`
  align-items: center;

  cursor: pointer;
  display: flex;
  font-weight: 500;
  justify-content: space-evenly;

  & > ul {
    align-items: center;
    display: flex;
    font-size: 1.6rem;
    justify-content: space-between;
    list-style: none;
  }

  & > ul :first-child {
    display: flex;
    align-items: center;
    height: 42px;
    width: 42px;
  }

  & > ul :first-child:hover {
    color: blue;
    transition: color 0.3s linear;
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
