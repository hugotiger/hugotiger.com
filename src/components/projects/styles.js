import styled from "styled-components"

const Wrapper = styled.section`
  margin-top: 40px;
  h1 {
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  .desc {
    margin-top: 0;
    margin-bottom: 48px;
    color: #869ab8;
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
    padding-left: 2px;
  }

  p {
    margin: 0;
    color: #869ab8;
    margin-bottom: 12px;
    padding-left: 2px;
  }

  a {
    padding-left: 2px;
    font-size: 14px;
    cursor: pointer;
    color: #335eea;
    text-decoration: none;
    font-weight: 500;

    &:last-of-type {
      margin-left: 16px;
    }
  }
`

const ImageWrapper = styled.div`
  box-shadow: 0 16px 32px rgba(22, 28, 45, 0.05);
  border-radius: 6px;
  width: 100%;
  height: 270px;
  overflow: hidden;
  position: relative;
  user-select: none;
  img {
    width: 100%;
    object-fit: cover;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: " ";
    background: ${props => (props.bg ? props.bg : "#335eea")};
    opacity: ${props => (props.bg ? 1 : 0.3)};
  }
`

const Pill = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  display: block;
  padding: 4px 12px;
  font-size: 12px;
  text-transform: uppercase;
  z-index: 5;
  background: ${({ variant }) =>
    variant === "done" ? "#2eb67f" : variant === "active" ? "#FAC83E" : "gray"};
  color: ${({ variant }) =>
    variant === "done" ? "rgba(255, 255, 255, 0.8)" : "#1B2A4E"};
  letter-spacing: 1.6px;
  border-radius: 999px;
`

export const Styled = { Wrapper, Grid, GridItem, ImageWrapper, Pill }
