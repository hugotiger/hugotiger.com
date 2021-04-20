import React from "react"
import EmailIcon from "../../assets/email.svg"
import Button from "../button"
import { Styled } from "./styles"

export default function Footer({ ...restProps }) {
  return (
    <Styled.Footer {...restProps}>
      <Styled.Inner>
        <div>© 2021 Hugo Holm</div>
        <Button
          as="a"
          href="mailto:hugo.tiger.holm@gmail.com"
          title="Send email"
          aria-label="Send email"
          icon={<EmailIcon />}
        >
          Contact me
        </Button>
      </Styled.Inner>
    </Styled.Footer>
  )
}
