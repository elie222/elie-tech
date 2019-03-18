import * as React from "react"
import styled from "@emotion/styled"
import GetInTouchButton from "../Button/GetInTouchButton"
// not working with SB :(
// import headerBackground from "./header-background.svg"
// import headerBackground from './header-background.png'
// background-image: url(${headerBackground});

const Background = styled.div`
  background: var(--deep-sky-blue); /* fallback for old browsers */
  background: -webkit-linear-gradient(90deg, var(--deep-sky-blue), #373b44); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    90deg,
    var(--deep-sky-blue),
    #373b44
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding-bottom: 60px;
`

const Brand = styled.div`
  color: #ffffff;
  padding-top: 35px;
`

const H1 = styled.h1`
  font-size: 36px;
  line-height: 1.42857em;
  color: #ffffff;
  padding: 60px 10%;
  font-weight: 300;
`

export default () => {
  return (
    <Background>
      <Brand>elie.tech</Brand>
      <H1>
        Hey, my name is Eliezer Steinbock.
        <br />
        I’m a full stack freelance developer living in Tel Aviv.
      </H1>
      <GetInTouchButton transparentHover />
    </Background>
  )
}
