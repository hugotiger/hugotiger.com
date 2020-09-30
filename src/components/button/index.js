import React from "react"
import { Styled } from "./styles"

export default function Button({ icon, children, ...restProps }) {
  return (
    <Styled.Button {...restProps}>
      {icon && icon}
      {children}
    </Styled.Button>
  )
}
