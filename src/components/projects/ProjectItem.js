import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectItemContainer = styled.div`
  width: 100%;
`

const ProjectImageWrapper = styled.div`
  position: relative;
  box-shadow: 0 16px 32px rgba(22, 28, 45, 0.05);
  border-radius: 6px;
  overflow: hidden;
  user-select: none;
  border: 1px solid rgba(0, 0, 0, 0.04);
  filter: saturate(120%);

  &:hover {
    &::after {
      opacity: 0;
      transition: opacity 0.3s;
    }
  }
  &::after {
    content: " ";
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: saturate(0) invert(0.2);
    background: #375dde;
    mix-blend-mode: color;
    opacity: 0.5;
    pointer-events: none;
    transition: opacity 0.3s;
  }
`

const ProjectDescWrapper = styled.div`
  padding-left: 2px;

  & > h2 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  & > p {
    margin: 0;
    margin-bottom: 12px;
  }

  a {
    font-size: 0.875rem;
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;

    border-bottom: 1px solid transparent;
    transition: border-color 0.1s;
    i {
      background-size: 10px 10px;
    }
    svg {
      stroke: currentColor;
      vertical-align: middle;
      margin-left: 0.5rem;
      transform: translateY(-2px);
    }

    &:hover {
      border-color: currentColor;
    }

    &:last-of-type {
      margin-left: 16px;
      color: #506690;
    }
  }
`

export function ProjectItem({
  githubUrl,
  demoUrl,
  imgData,
  title,
  description,
  pill,
}) {
  return (
    <ProjectItemContainer>
      <ProjectImageWrapper>
        <a href={demoUrl} aria-label={title} rel="noreferrer" target="_blank">
          <Img fluid={imgData} backgroundColor="#eaecf0" />
          {pill && pill}
        </a>
      </ProjectImageWrapper>
      <ProjectDescWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={demoUrl} rel="noreferrer" target="_blank">
          Live demo ->
        </a>
        <a href={githubUrl} rel="noreferrer" target="_blank">
          View code
        </a>
      </ProjectDescWrapper>
    </ProjectItemContainer>
  )
}
