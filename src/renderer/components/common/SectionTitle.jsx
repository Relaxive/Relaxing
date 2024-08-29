import styled from "styled-components";

const SectionTitle = styled.h2.withConfig({
  shouldForwardProp: prop => prop !== "isActive"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isActive }) => (isActive ? "1.25rem 2.5rem" : "1.25rem 2.5rem")};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, isActive }) =>
    isActive ? "none" : theme.colors.gray};
  box-shadow: ${({ isActive }) => (isActive ? "none" : "none")};
  cursor: pointer;

  span {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.white : theme.colors.deepGray};
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    font-size: ${({ theme }) => theme.fontSizes.middleLarge};
    transition: color 0.3s ease;
  }

  img {
    filter: ${({ isActive }) =>
      isActive
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
