import * as React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Card from "../Card/Card"

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  background-color: #fff;
`

const ImageContainer = styled.div`
  width: 100%;
`

const Label = styled.div`
  padding: 20px;
`

export interface VideoItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  image: any
  link: string
}

export default (props: VideoItemProps) => {
  return (
    <Wrapper href={props.link}>
      <ImageContainer>
        <Img fluid={props.image} alt={props.title} style={{ width: "100%" }} />
      </ImageContainer>
      <Label>{props.title}</Label>
    </Wrapper>
  )
}
