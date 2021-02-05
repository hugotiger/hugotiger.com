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
