import * as React from "react"
import styled from "@emotion/styled"
import GetInTouchButton from "../Button/GetInTouchButton"
// not working with SB :( to fix move to asset folder
// import headerBackground from "./header-background.svg"
// import headerBackground from './header-background.png'
// background-image: url(${headerBackground});

const Background = styled.div`
  background: var(--deep-sky-blue); /* fallback for old browsers */
  background: linear-gradient(
    90deg,
    var(--deep-sky-blue),
    #373b44
  );

  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 0 10% 60px;
`

const Brand = styled.div`
  color: #ffffff;
  padding-top: 35px;
`

const H1 = styled.h1`
  font-size: 36px;
  line-height: 1.42857em;
  color: #ffffff;
  padding: 60px 0;
  font-weight: 300;
`

export default () => {
  return (
    <Background>
      <Brand>elie.tech</Brand>
      <H1>
        Hey, my name is Elie.
        <br />
        This is my 2019 site. Update coming soon 🤞
      </H1>
      <GetInTouchButton transparentHover />
    </Background>
  )
}
