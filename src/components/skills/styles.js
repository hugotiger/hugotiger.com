import styled from "styled-components"

const Wrapper = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column; /**Temprary */
  justify-content: space-between;

  /**Temporary TODO:*/

  h1 {
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  .desc {
    margin-top: 0;
    margin-bottom: 32px;
    color: #869ab8;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 64px;
    grid-row-gap: 32px;
    @media (max-width: 1020px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  h3 {
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

const Left = styled.div`
  position: sticky;
  align-self: flex-start;
  top: 64px;
  display: flex;
  flex-direction: column;
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

const Right = styled.div`
  display: flex;
  flex-direction: column;
`

export const Styled = { Wrapper, Left, Right }
