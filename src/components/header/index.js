import React from "react"
import { Styled } from "./styles"
import IconButton from "../icon-button"
import GitHubIcon from "../../assets/github.svg"
import { Link } from "gatsby"

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Inner>
        <Link className="logo" to="/">
          Hugo Tiger
        </Link>
        <a
          href="https://github.com/hugotiger"
          title="Hugo Tiger's Github-profile"
        >
          <IconButton icon={<GitHubIcon />} aria-label="GitHub" />
        </a>
      </Styled.Inner>
    </Styled.Header>
  )
}
