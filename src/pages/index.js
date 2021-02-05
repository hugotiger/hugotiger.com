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
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Layout>
      <Banner />
      <Projects />
      <Skills />
    </Layout>
  </>
)

export default IndexPage
