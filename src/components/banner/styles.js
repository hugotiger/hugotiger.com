import styled from "styled-components"

const Banner = styled.div`
  min-height: 20vh;
  max-height: 500px;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    line-height: 1.4;
    margin: 0;
    margin-bottom: 24px;
  }

  p {
    max-width: 60ch;
    font-size: 16px;
    line-height: 1.8;
    margin: 0;

    .currently {
      display: block;
      margin-top: 12px;
    }
  }

  /* By Jake Jarvis (https://jarv.is/notes/css-waving-hand-emoji/) */
  .wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;

    @keyframes wave-animation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(14deg);
      } /* The following five values can be played with to make the waving more or less extreme */
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      } /* Reset for the last half to pause */
      100% {
        transform: rotate(0deg);
      }
    }
  }
`
export const Styled = { Banner }
