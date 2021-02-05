import React from "react"
import "@fontsource/manrope/400.css"
import "@fontsource/manrope/500.css"
import "@fontsource/manrope/600.css"
import "@fontsource/manrope/700.css"
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
