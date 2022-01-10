import { TechTextWrapper } from "./styles/TechText.styled";

const TechText = ({ text }) => {
  return (
    <TechTextWrapper>
      <p>{text}</p>
    </TechTextWrapper>
  );
};

export default TechText;
