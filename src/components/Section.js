import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.section`
  margin-top: 4rem;
  & > h1 {
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  & > p {
    margin-top: 0;
    margin-bottom: 2.5rem;
  }
`

export function Section({ title, desc, children }) {
  return (
    <SectionWrapper>
      <h1>{title}</h1>
      <p>{desc}</p>
      {children}
    </SectionWrapper>
  )
}
