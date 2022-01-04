import { StyledContainer } from "./styles/LogoContainer.styled";
import Logo from "../assets/MGlogo.png";

const LogoContainer = () => {
  return (
    <StyledContainer>
      <a href="/">
        <img src={Logo} alt="Manny's Logo" />
      </a>
    </StyledContainer>
  );
};

export default LogoContainer;
