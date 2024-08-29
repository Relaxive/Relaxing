import styled from "styled-components";
import SectionTitle from "@components/common/SectionTitle";
import icons from "@public/images";

const SectionContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isVisible"
})`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const ToggleSection = ({
  title,
  isActive,
  onToggle,
  disabled,
  isVisible,
  children
}) => {
  return (
    <SectionContainer isVisible={isVisible} disabled={disabled}>
      <SectionTitle isActive={isActive} onClick={onToggle}>
        <span>{title}</span>
        <img src={icons.arrowIcon} alt="Arrow Icon" />
      </SectionTitle>
      {isActive && children}
    </SectionContainer>
  );
};

export default ToggleSection;
