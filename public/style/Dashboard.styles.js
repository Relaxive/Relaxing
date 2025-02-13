import styled from "styled-components";
import { media, commonBoxShadow } from "./utils.styles";

export const DashboardContentContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 3rem;
  padding: 3rem;
  padding-left: 15rem;
  cursor: default;
  transition: padding 0.1s ease-in-out;

  > p {
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.white};
  }

  .layer {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  ${media.smallToMedium`
		padding: 2rem;
		padding-left: 10rem;
	`}
`;

export const MyProjectContentContainer = styled.div`
  width: 50%;
  padding: 1.875rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  box-shadow: ${({ theme }) => theme.colors.opacity};
  background-color: ${({ theme }) => theme.colors.white};
  ${commonBoxShadow}

  p {
    display: flex;
    align-items: center;
    padding: 0.3125rem 0;
    font-size: ${({ theme }) => theme.fontSizes.largePlus};
    color: ${({ theme }) => theme.colors.basic};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.lightMain};

    img {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    height: calc(100% - 1.875rem);
    margin-top: 0.5rem;
    padding-left: 1rem;
    overflow-y: auto;
  }

  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    padding-top: 0.1875rem;

    .data-list {
      display: flex;
      align-items: center;

      img {
        width: 1.5625rem;
        margin-right: 0.5rem;
      }

      span {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.basicText};
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      margin-top: 0.5rem;
      padding-left: 1rem;
    }
  }

  ${media.smallToMedium`
    width: 100%;
	`};
`;

export const ProjectControllerContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isStartChecked"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 9.375rem;
  border-radius: ${({ theme }) => theme.borderRadius.sub};
  box-shadow: ${({ theme }) => theme.colors.opacity};
  background-color: ${({ theme }) => theme.colors.white};
  ${commonBoxShadow}

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.125rem;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ isStartChecked, theme }) =>
      isStartChecked ? theme.colors.basic : theme.colors.sub};
  }

  .project-controller {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 3.125rem;
    padding: 0 0.625rem;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};

    span {
      padding-right: 0.625rem;
    }

    .project-controller-button {
      appearance: none;
      position: relative;
      width: 4.5rem;
      height: 2rem;
      border: 2px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.largest};
      background-color: ${({ isStartChecked, theme }) =>
        isStartChecked ? theme.colors.main : theme.colors.border};
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      &:before {
        content: "";
        position: absolute;
        top: 0.125rem;
        left: 0.125rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.white};
        transition: left 0.3s ease-in-out;
      }

      &:checked:before {
        transform: translateX(2.5rem);
      }
    }
  }

  ${media.smallToMedium`
    position: absolute;
    top: .625rem;
    flex-direction: row;
    right: 1.875rem;
		width: 40%;
    height: 3.125rem;

    h1 {
      height: inherit;
      font-size: 1.25rem;
      letter-spacing: -1px;
    }

    .project-controller {
      justify-content: center;
      align-items: center;
    }
	`};
`;
