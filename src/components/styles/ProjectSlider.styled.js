import styled from "styled-components";

export const MainContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 300px;
`;

export const SlideContainer = styled.div`
  height: 600px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 100%;
  }
`;

export const IndividualSlide = styled.div`
  background-image: url(${({ backGroundImage }) => backGroundImage});
`;
