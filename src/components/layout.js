/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Container from "./container"
import GlobalStyle from "./GlobalStyle"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  )
}
