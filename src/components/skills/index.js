import React from "react"
import { Styled } from "./styles"

export default function Skills() {
  return (
    <Styled.Wrapper>
      {/* <Styled.Left>
        <h1>My skills</h1>
        <p className="desc">Tjenare</p>
      </Styled.Left>
      <Styled.Right></Styled.Right> */}

      <h1>My skills</h1>
      <p className="desc">
        Here is a selection of some of the technologies I've worked with.
      </p>
      <div className="grid">
        <div className="group">
          <h3>Front-end</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Gatsby</li>
            <li>Flutter</li>
          </ul>
        </div>
        <div className="group">
          <h3>Back-end</h3>
          <ul>
            <li>Node JS</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Firebase</li>
            <li>GraphQL</li>
            <li>GoLang</li>
          </ul>
        </div>
        <div className="group">
          <h3>Other</h3>
          <ul>
            <li>Git</li>
            <li>Redux</li>
            <li>CSS-in-JS</li>
            <li>Framer Motion</li>
            <li>Adobe Suite</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
    </Styled.Wrapper>
  )
}
