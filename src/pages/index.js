import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Projects from "../components/projects"
import Skills from "../components/skills"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Hugo Tiger</title>
      <html lang="en" />
    </Helmet>
    <Layout>
      <Banner />
      <Projects />
      <Skills />
    </Layout>
  </>
)

export default IndexPage
