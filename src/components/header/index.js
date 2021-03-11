import { Link } from "gatsby"
import React from "react"
import GitHubIcon from "../../assets/github.svg"
import IconButton from "../icon-button"
import { Styled } from "./styles"

export default function Header() {
  return (
    <Styled.Header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Styled.Inner>
        <Link className="logo" to="/">
          Hugo Tiger
        </Link>

        <IconButton
          icon={<GitHubIcon />}
          aria-label="GitHub"
          as="a"
          href="https://github.com/hugotiger"
          title="Hugo Tiger's Github-profile"
        />
      </Styled.Inner>
    </Styled.Header>
  )
}
