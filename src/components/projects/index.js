import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Section } from "../Section"
import { Pill } from "../Pill"
import { ProjectItem } from "./ProjectItem"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  grid-gap: 4rem;

  @media (max-width: 1020px) {
    grid-gap: 3rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export default function Projects() {
  const images = useStaticQuery(graphql`
    query {
      journal: file(relativePath: { eq: "journal.png" }) {
        childImageSharp {
          fluid(maxWidth: 704, maxHeight: 448) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      beerTracker: file(relativePath: { eq: "beer-tracker.png" }) {
        childImageSharp {
          fluid(maxWidth: 704, maxHeight: 448) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      carbonClock: file(relativePath: { eq: "carbon-clock.png" }) {
        childImageSharp {
          fluid(maxWidth: 704, maxHeight: 448, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const src = images?.carbonClock?.childImageSharp?.fluid?.src

  return (
    <Section
      title="Featured projects"
      desc="Here are some projects i've been working on recently. More will be added soon."
    >
      <Grid>
        <ProjectItem
          title="Carbon Clock"
          imgData={images?.carbonClock?.childImageSharp?.fluid}
          demoUrl="https://carbonclock.hugotiger.com"
          githubUrl="https://github.com/hugotiger/carbon-clock"
          description="Carbon Clock is an estimation of how much CO2 can be released into the atmosphere to limit global warming to a maximum of 1.5°C."
          pill={<Pill variant="done">Finished</Pill>}
        />
        <ProjectItem
          title="Beer Tracker"
          imgData={images?.beerTracker?.childImageSharp?.fluid}
          demoUrl="https://beertracker.hugotiger.com"
          githubUrl="https://github.com/hugotiger/beer-tracker"
          description="Mobile first webpage built using the MERN-stack, styled-components and framer motion."
          pill={<Pill variant="done">Finished</Pill>}
        />
        <ProjectItem
          title="Journal Travel Blog"
          imgData={images?.journal?.childImageSharp?.fluid}
          demoUrl="https://journal.hugotiger.com"
          githubUrl="https://github.com/hugotiger/journal"
          description="Journal is a super simple travel blog concept showcasing some
          fancy animations created using Framer Motion."
          pill={<Pill variant="active">Experimental</Pill>}
        />
      </Grid>
    </Section>
  )
}
