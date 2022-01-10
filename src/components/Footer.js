import { StyledFooter } from "./styles/Footer.styled";
import { Container } from "./styles/Container.styled";
import ButtonLink from "./ButtonLink";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <h1>Get in Touch.</h1>
        <p>
          I'm eager for new challenges and opportunities. Please send an email
          if you would like to chat with me.
        </p>
        <ButtonLink title="Email Me" />
      </Container>
    </StyledFooter>
  );
};

export default Footer;
