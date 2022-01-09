import styled from "styled-components";

export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
`;

export const Intro = styled.div`
  line-height: 2;
  margin: 0 10% 22px 10%;

  & > p {
    font-size: 1.4rem;
    margin: 0 10vw;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    line-height: 1.3;
    margin: 2vw;

    & > p {
      font-size: 1.1rem;
      margin: 0 2vw;
    }
  }
`;

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2.2rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`;
