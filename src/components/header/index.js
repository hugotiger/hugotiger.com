import React from "react"
import { Styled } from "./styles"
import Container from "../container"
import IconButton from "../icon-button"
import GitHub from "../../assets/github.svg"
import { Link } from "gatsby"

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Inner>
        <a className="logo" href="/">
          Hugo Tiger
        </a>
        <a
          href="https://github.com/hugotiger"
          title="Hugo Tiger's Github-profile"
        >
          <IconButton icon={<GitHub />} />
        </a>
      </Styled.Inner>
    </Styled.Header>
  )
}
