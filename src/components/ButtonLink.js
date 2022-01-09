import StyledButton from "./styles/Button.styled";

const ButtonLink = ({ href, width, title }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer">
        <StyledButton width={width}>{title}</StyledButton>
      </a>
    </div>
  );
};

export default ButtonLink;
