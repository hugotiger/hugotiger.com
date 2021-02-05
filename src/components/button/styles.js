import styled from "styled-components"

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  color: #506690;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  user-select: none;

  svg {
    margin-right: 0.75rem;
  }

  &:hover {
    background-color: rgba(80, 102, 144, 0.1);
  }

  &:active {
    outline: none;
    background-color: rgba(80, 102, 144, 0.15);
  }
`
export const Styled = { Button }
