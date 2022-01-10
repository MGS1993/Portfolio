import styled from "styled-components";

export const ProjectContainer = styled.section`
  background-color: #ececec;
  display: flex;
  flex-direction: column;

  //changed to min-width for desktop application only
  @media (min-width: ${({ theme }) => theme.mobile}) {
    & > div:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

export const ProjectListing = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ProjectBriefing = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;

  & > h1 {
    font-size: 2rem;
    margin-bottom: 35px;
  }

  & > h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  & > p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 30px;
    padding-left: 0px;
  }
`;

export const ProjectScreens = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;

  /* targets non mobile images that use div>img instead of slider */
  & > div > img {
    padding: 10%;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 30px;
    padding-left: 0px;

    & > div > img {
      padding: 0;
    }
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin: 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & > div {
      margin: 5px;
    }
  }
`;
