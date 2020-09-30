import styled from "styled-components"

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  color: #161c2d;
  user-select: none;

  &:hover {
    background-color: rgba(80, 102, 144, 0.1);
  }

  &:active {
    outline: none;
    background-color: rgba(80, 102, 144, 0.15);
  }
`

export const Styled = { Button }
