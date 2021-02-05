import styled from "styled-components"

const Wrapper = styled.section`
  margin-top: 40px;
  h1 {
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  .desc {
    margin-top: 0;
    margin-bottom: 3rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1020px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-auto-flow: row;
  grid-column-gap: 64px;
  grid-row-gap: 64px;
`

const GridItem = styled.div`
  width: 100%;
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    margin-bottom: 12px;
  }

  .project-desc {
    padding-left: 2px;

    a {
      font-size: 0.875rem;
      color: #335eea;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        border-bottom: 1px solid currentColor;
      }

      &:last-of-type {
        margin-left: 16px;
        color: #506690;
      }
    }
  }

  .img-wrapper {
    position: relative;
    box-shadow: 0 16px 32px rgba(22, 28, 45, 0.05);
    border-radius: 6px;
    overflow: hidden;
    user-select: none;

    .gatsby-image-wrapper {
      transition: filter 0.2s;
      filter: brightness(100%) saturate(100%);

      &:hover {
        filter: brightness(103%) saturate(130%);
      }
    }
  }
`

const Pill = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  display: block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  z-index: 5;
  background: ${({ variant }) =>
    variant === "done" ? "#2eb67f" : variant === "active" ? "#FAC83E" : "gray"};
  color: ${({ variant }) => (variant === "done" ? "white" : "#1B2A4E")};
  letter-spacing: 1.6px;
  border-radius: 999px;
  user-select: none;
`

export const Styled = { Wrapper, Grid, GridItem, Pill }
