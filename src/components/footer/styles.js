import styled from "styled-components"

const Footer = styled.footer`
  max-width: 1020px;
  width: 100%;
  padding: 0 70px;
  position: relative;
  margin: 0 auto;
  margin-top: 70px;
  flex-shrink: 0;
  display: flex;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`

const Inner = styled.div`
  border-top: 1px solid #d9e2ef;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #506690;
  line-height: normal;

  @media (max-width: 700px) {
    height: 80px;
    font-size: 14px;

    a {
      font-size: 14px;
      height: 42px;
    }
  }
`

export const Styled = { Footer, Inner }
