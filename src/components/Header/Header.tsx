import * as React from "react"
import styled from "@emotion/styled"

const Background = styled.div`
  background-image: url('/static/images/header-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`

const Brand = styled.div`
  font-family: OpenSans;
  color: #ffffff;
  padding-top: 35px;
`

const H1 = styled.h1`
  font-family: OpenSans;
  font-size: 36px;
  color: #ffffff;
  padding: 60px 150px 106px;
`

export default () => {
  return (
    <Background>
      <Brand>elie.tech</Brand>
      <H1>
        Hey, my name is Eliezer Steinbock. I’m a full stack freelance developer living in Tel Aviv.
      </H1>
    </Background>
  )
}
