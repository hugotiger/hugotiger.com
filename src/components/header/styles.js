import styled from "styled-components"
import { motion } from "framer-motion"

const Header = styled(motion.header)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

// I princip samma som container fast med lite flex properties
const Inner = styled.div`
  height: 120px;
  max-width: 1020px;
  width: 100%;
  padding: 0 70px;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    padding: 0 20px;
    height: 80px;
  }

  .logo {
    font-weight: 700;
    color: var(--blue);
    text-decoration: none;
  }
`

export const Styled = { Header, Inner }
