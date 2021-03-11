import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const SectionWrapper = styled(motion.section)`
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
    <SectionWrapper
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
    >
      <h1>{title}</h1>
      <p>{desc}</p>
      {children}
    </SectionWrapper>
  )
}
