import { StyledHeader, StyledNav, BurgerWrapper } from "./styles/Header.styled";
import { GiHamburgerMenu } from "react-icons/gi";

import { BsLinkedin } from "react-icons/bs";

import LogoContainer from "./LogoContainer";

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer />
      <StyledNav>
        <ul>
          <l1>
            <BsLinkedin />
          </l1>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </StyledNav>
      <BurgerWrapper>
        <GiHamburgerMenu size={30} />
      </BurgerWrapper>
    </StyledHeader>
  );
};

export default Header;
