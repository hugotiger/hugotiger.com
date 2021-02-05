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
            maxWidth: 880
            maxHeight: 560
            duotone: { highlight: "#c2cff9", shadow: "#2f4692", opacity: 80 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      beerTracker: file(relativePath: { eq: "beer-tracker.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 880
            maxHeight: 550
            duotone: { highlight: "#c2cff9", shadow: "#2f4692", opacity: 80 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      carbonClock: file(relativePath: { eq: "carbon-clock.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 880
            maxHeight: 550
            duotone: { highlight: "#c3c3c3", shadow: "#000000" }
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
            <a href="https://journal.hugotiger.com">
              <Img
                fluid={data?.carbonClock?.childImageSharp?.fluid}
                backgroundColor="#eaecf0"
              />
              <Styled.Pill variant="done">Finished</Styled.Pill>
            </a>
          </div>
          <div className="project-desc">
            <h2>Carbon Clock</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias sint mollitia omnis magni autem totam veritatis fugiat
              voluptatum tempora.
            </p>
            <a href="https://carbonclock.hugotiger.com">Live demo -></a>
            <a href="https://github.com/hugotiger/carbon-clock">View code</a>
          </div>
        </Styled.GridItem>
        <Styled.GridItem>
          <div className="img-wrapper">
            <a href="https://beertracker.hugotiger.com">
              <Img
                fluid={data?.beerTracker?.childImageSharp?.fluid}
                backgroundColor="#eaecf0"
              />
              <Styled.Pill variant="done">Finished</Styled.Pill>
            </a>
          </div>
          <div className="project-desc">
            <h2>Beer Tracker</h2>
            <p>
              A simple webpage for tracking your beer consumption. Built using
              the MERN-stack, styled-components and framer motion.
            </p>
            <a href="https://beertracker.hugotiger.com">Live demo -></a>
            <a href="https://github.com/hugotiger/beer-tracker">View code</a>
          </div>
        </Styled.GridItem>
        <Styled.GridItem>
          <div className="img-wrapper">
            <a href="https://journal.hugotiger.com">
              <Img
                fluid={data?.journal?.childImageSharp?.fluid}
                backgroundColor="#eaecf0"
              />
              <Styled.Pill variant="active">Experimental</Styled.Pill>
            </a>
          </div>
          <div className="project-desc">
            <h2>Journal</h2>
            <p>
              Journal is a super simple travel blog concept showcasing some
              fancy animations created using Framer Motion.
            </p>
            <a href="https://journal.hugotiger.com">Live demo -></a>
            <a href="https://github.com/hugotiger/journal">View code</a>
          </div>
        </Styled.GridItem>
      </Styled.Grid>
    </Styled.Wrapper>
  )
}
