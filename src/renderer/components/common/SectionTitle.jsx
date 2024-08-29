import styled from "styled-components";

const SectionTitle = styled.h2.withConfig({
  shouldForwardProp: prop => prop !== "isActive" && prop !== "disabled"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isActive, disabled }) =>
    disabled ? "1rem 2.5rem" : isActive ? "1.25rem 2.5rem" : "1.25rem 2.5rem"};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, isActive, disabled }) =>
    disabled ? theme.colors.gray : isActive ? "none" : theme.colors.gray};
  box-shadow: ${({ isActive, disabled }) =>
    disabled ? "none" : (isActive = "none")};
  cursor: pointer;

  span {
    color: ${({ theme, isActive, disabled }) =>
      disabled
        ? theme.colors.deepGray
        : isActive
          ? theme.colors.white
          : theme.colors.deepGray};
    font-weight: ${({ isActive, disabled }) =>
      disabled ? "normal" : isActive ? "bold" : "normal"};
    font-size: ${({ theme }) => theme.fontSizes.middleLarge};
    transition: color 0.3s ease;
  }

  img {
    filter: ${({ isActive, disabled }) =>
      disabled
        ? "grayscale(100%)"
        : isActive
          ? "invert(100%)"
          : "invert(29%) sepia(5%) saturate(440%) hue-rotate(173deg) brightness(96%) contrast(91%)"};
    transform: ${({ isActive }) =>
      isActive ? "rotate(0deg)" : "rotate(180deg)"};
    transition:
      transform 0.3s ease,
      fill 0.3s ease;
  }
`;

export default SectionTitle;
