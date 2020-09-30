import React from "react"
import { Styled } from "./styles"

export default function IconButton({ icon, ...restProps }) {
  return <Styled.Button {...restProps}>{icon}</Styled.Button>
}
