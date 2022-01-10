import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: rgb(38, 48, 60);
  background: linear-gradient(
    0deg,
    rgba(38, 48, 60, 1) 0%,
    rgba(116, 148, 180, 1) 100%
  );
  color: #fff;
  padding: 20px 0px 80px;

  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & > div > h1 {
    font-size: 38px;
    margin-bottom: 20px;
  }
  & > div > p {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0px;

    & > div {
      line-height: 2;
    }

    & > div > h1 {
      font-size: 28px;
    }
    & > div > p {
      font-size: 18px;
    }
  }
`;
