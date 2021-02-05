import React from "react"
import { Styled } from "./styles"
import Button from "../button"
import EmailIcon from "../../assets/email.svg"

export default function Footer({ ...restProps }) {
  return (
    <Styled.Footer {...restProps}>
      <Styled.Inner>
        <div>© 2020 Hugo Holm</div>
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
