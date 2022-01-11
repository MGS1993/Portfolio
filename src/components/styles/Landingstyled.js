import styled from "styled-components";

export const BlurbContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 90%;

  & > svg {
    margin-right: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    flex-direction: column;
    text-align: center;

    & > svg {
      height: 80px;
      width: 80px;
      margin-right: 0px;
    }
  }
`;

/* /\/\/\/\/\\/\/\/\/\\/\/\/\/\\/\/\\/\/\/\\\/\/\/\/\/\/\/\/\//\/\/\// */

export const LandingContainer = styled.section`
  background-image: url(${({ backGroundImage }) => backGroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: start;
  }
`;

/* /\/\/\/\/\\/\/\/\/\\/\/\/\/\\/\/\\/\/\/\\\/\/\/\/\/\/\/\/\//\/\/\// */

export const LargeFont = styled.h1`
  color: #6969d4;
  font-size: 62px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
  }
`;

/* /\/\/\/\/\\/\/\/\/\\/\/\/\/\\/\/\\/\/\/\\\/\/\/\/\/\/\/\/\//\/\/\// */

export const Marked = styled.mark`
  background-color: #6969d4;
  display: inline-block;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: orange;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover,
  .hvr-bounce-to-right:focus,
  .hvr-bounce-to-right:active {
    color: white;
  }
  cursor: pointer;
  &:hover:before,
  .hvr-bounce-to-right:focus:before,
  .hvr-bounce-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
`;

/* /\/\/\/\/\\/\/\/\/\\/\/\/\/\\/\/\\/\/\/\\\/\/\/\/\/\/\/\/\//\/\/\// */

export const StyledP = styled.p`
  font-size: ${({ size }) => size};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
  }
`;

/* /\/\/\/\/\\/\/\/\/\\/\/\/\/\\/\/\\/\/\/\\\/\/\/\/\/\/\/\/\//\/\/\// */

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h1,
  p {
    margin: 15px 0px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & > * {
      margin: 10px 0px;
    }
  }
`;
