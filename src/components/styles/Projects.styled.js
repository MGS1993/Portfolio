import styled from "styled-components";

export const ProjectContainer = styled.section`
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1920px;

  //changed to min-width for desktop application only
  @media (min-width: ${({ theme }) => theme.mobile}) {
    & > div:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

export const ProjectListing = styled.div`
  display: flex;
  background-color: ${({ bgColor }) => bgColor};
  padding: 10px 190px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 0px;
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

    & > h1,
    h3 {
      text-align: center;
    }
  }
`;

export const ProjectScreens = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 30px;
    padding-left: 0px;
    max-height: ${({ maxHeight }) => maxHeight};
  }
`;

export const ImageContainer = styled.div`
  min-height: 500px;

  & > img {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-height: 170px;
    & > img {
      padding: 0;
    }
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin: 5px 8px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & > div {
      margin: 5px;
    }
  }
`;
