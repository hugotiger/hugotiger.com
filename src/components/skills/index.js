import React from "react"
import styled from "styled-components"
import { Section } from "../Section"

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 64px;
  grid-row-gap: 32px;
  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ListGridItem = styled.div`
  h2 {
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 16px;
    font-weight: 500;
  }

  ul {
    appearance: none;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 8px 0;
      border-bottom: 1px solid #d9e2ef;
      color: #506690;

      &:last-of-type {
        border: none;
      }
    }
  }
`
export default function Skills() {
  return (
    <Section
      title="My skills"
      desc="Here is a selection of some of the technologies I've worked with."
    >
      <ListGrid>
        <ListGridItem>
          <h2>Front-end</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Gatsby</li>
            <li>Flutter</li>
          </ul>
        </ListGridItem>
        <ListGridItem>
          <h2>Back-end</h2>
          <ul>
            <li>Node JS</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Firebase</li>
            <li>GraphQL</li>
            <li>GoLang</li>
          </ul>
        </ListGridItem>
        <ListGridItem>
          <h2>Other</h2>
          <ul>
            <li>Git</li>
            <li>Redux</li>
            <li>CSS-in-JS</li>
            <li>Framer Motion</li>
            <li>Adobe Suite</li>
            <li>Jest</li>
          </ul>
        </ListGridItem>
      </ListGrid>
    </Section>
  )
}
