import React from "react"
import { Styled } from "./styles"

export default function Banner() {
  return (
    <Styled.Banner>
      <h1>
        Hi{" "}
        <span className="wave" role="img" aria-label="Waving hand">
          👋
        </span>
        <br></br>My name is Hugo
      </h1>
      <p>
        I've always had a big interest in UI/UX-design and I usually spend a lot
        of my spare time on web development. On this website I'll showcase some
        of my skills and projects so have a look around!
        <span className="currently">
          I'm currently on a break from studying Computer Science and
          Engineering at KTH in Stockholm, and am therefore available for hire.
        </span>
      </p>
    </Styled.Banner>
  )
}
