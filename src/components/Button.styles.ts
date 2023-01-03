import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secoundary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  color: #fff;

  background-color: ${({ theme }) => theme["green-500"]};
`;
