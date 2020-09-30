import React from "react"
import { Styled } from "./styles"
import Beer from "../../images/Screenshot 2020-09-30 at 23.09.39.png"
import Journal from "../../images/journal.png"

export default function Projects() {
  return (
    <Styled.Wrapper>
      <h1>Featured projects</h1>
      <p className="desc">
        Here are some projects i've been working on recently. More will be added
        soon.{" "}
      </p>
      <Styled.Grid>
        <Styled.GridItem>
          <a
            href="https://journal.hugotiger.com"
            style={{ display: "flex", margin: 0 }}
          >
            <Styled.ImageWrapper>
              <img src={Journal} />
              <Styled.Pill variant="done">Finished</Styled.Pill>
            </Styled.ImageWrapper>
          </a>
          <h2>Journal</h2>
          <p>
            Journal is a super simple travel blog concept showcasing some fancy
            animations created using Framer Motion.
          </p>
          <a href="https://journal.hugotiger.com">Live demo -></a>
          <a href="https://github.com/hugotiger/journal">View code</a>
        </Styled.GridItem>
        <Styled.GridItem>
          <a
            href="https://beertracker.hugotiger.com"
            style={{ display: "flex", margin: 0 }}
          >
            <Styled.ImageWrapper>
              <img src={Beer} />
              <Styled.Pill variant="done">Finished</Styled.Pill>
            </Styled.ImageWrapper>
          </a>
          <h2>Beer Tracker</h2>
          <p>
            A simple webpage for tracking your beer consumption. Built using the
            MERN-stack, styled-components and framer motion.
          </p>
          <a href="https://beertracker.hugotiger.com">Live demo -></a>
          <a href="https://github.com/hugotiger/beer-tracker">View code</a>
        </Styled.GridItem>
        <Styled.GridItem style={{ cursor: "pointer" }}>
          <Styled.ImageWrapper bg="rgba(80,102,144,0.1)">
            <Styled.Pill variant="active">In progress</Styled.Pill>
          </Styled.ImageWrapper>
          <h2>Instagram Clone</h2>
          <p>Coming soon...</p>
        </Styled.GridItem>
      </Styled.Grid>
    </Styled.Wrapper>
  )
}
