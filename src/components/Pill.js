import styled from "styled-components"

export const Pill = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  display: block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  z-index: 5;
  background: ${({ variant }) =>
    variant === "done" ? "#73dab0" : variant === "active" ? "#FAC83E" : "gray"};
  color: ${({ variant }) => (variant === "done" ? "#085f3c" : "#1B2A4E")};
  letter-spacing: 1.6px;
  border-radius: 999px;
  user-select: none;
`
