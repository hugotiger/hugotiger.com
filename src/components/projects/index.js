import React from "react"
import { Styled } from "./styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      journal: file(relativePath: { eq: "journal.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 704
            maxHeight: 448
            duotone: { highlight: "#c2cff9", shadow: "#2f4692", opacity: 80 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      beerTracker: file(relativePath: { eq: "beer-tracker.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 704
            maxHeight: 448
            duotone: { highlight: "#c2cff9", shadow: "#2f4692", opacity: 80 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      carbonClock: file(relativePath: { eq: "carbon-clock.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 704
            maxHeight: 448
            duotone: { highlight: "#c2cff9", shadow: "#2f4692", opacity: 50 }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Styled.Wrapper>
      <h1>Featured projects</h1>
      <p className="desc">
        Here are some projects i've been working on recently. More will be added
        soon.
      </p>
      <Styled.Grid>
        <Styled.GridItem>
          <div className="img-wrapper">
            <a
              href="https://carbonclock.hugotiger.com"
              aria-label="Carbon Clock"
              rel="noopener"
              target="_blank"
            >
              <Img
                fluid={data?.carbonClock?.childImageSharp?.fluid}
                backgroundColor="#eaecf0"
              />
              <Styled.Pill variant="done" aria-hidden="true">
                Finished
              </Styled.Pill>
            </a>
          </div>
          <div className="project-desc">
            <h2>Carbon Clock</h2>
            <p>
              Carbon Clock is an estimation of how much CO2 can be released into
              the atmosphere to limit global warming to a maximum of 1.5°C.
            </p>
            <a
              href="https://carbonclock.hugotiger.com"
              rel="noopener"
              target="_blank"
            >
              Live demo ->
            </a>
            <a
              href="https://github.com/hugotiger/carbon-clock"
              rel="noopener"
              target="_blank"
            >
              View code
            </a>
          </div>
        </Styled.GridItem>
        <Styled.GridItem>
          <div className="img-wrapper">
            <a
              href="https://beertracker.hugotiger.com"
              aria-label="Beer Tracker"
              rel="noopener"
              target="_blank"
            >
              <Img
                fluid={data?.beerTracker?.childImageSharp?.fluid}
                backgroundColor="#eaecf0"
              />
              <Styled.Pill variant="done" aria-hidden="true">
                Finished
              </Styled.Pill>
            </a>
          </div>
          <div className="project-desc">
            <h2>Beer Tracker</h2>
            <p>
              A simple webpage for tracking your beer consumption. Built using
              the MERN-stack, styled-components and framer motion.
            </p>
            <a
              href="https://beertracker.hugotiger.com"
              rel="noopener"
              target="_blank"
            >
              Live demo ->
            </a>
            <a
              href="https://github.com/hugotiger/beer-tracker"
              rel="noopener"
              target="_blank"
            >
              View code
            </a>
          </div>
        </Styled.GridItem>
        <Styled.GridItem>
          <div className="img-wrapper">
            <a
              href="https://journal.hugotiger.com"
              aria-label="Journal Travel Blog"
              rel="noopener"
              target="_blank"
            >
              <Img
                fluid={data?.journal?.childImageSharp?.fluid}
                backgroundColor="#eaecf0"
              />
              <Styled.Pill variant="active" aria-hidden="true">
                Experimental
              </Styled.Pill>
            </a>
          </div>
          <div className="project-desc">
            <h2>Journal</h2>
            <p>
              Journal is a super simple travel blog concept showcasing some
              fancy animations created using Framer Motion.
            </p>
            <a
              href="https://journal.hugotiger.com"
              rel="noopener"
              target="_blank"
            >
              Live demo ->
            </a>
            <a
              href="https://github.com/hugotiger/journal"
              rel="noopener"
              target="_blank"
            >
              View code
            </a>
          </div>
        </Styled.GridItem>
      </Styled.Grid>
    </Styled.Wrapper>
  )
}
