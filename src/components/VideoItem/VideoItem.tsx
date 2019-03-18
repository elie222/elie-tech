import * as React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
`

const ImageContainer = styled.div`
  /* flex: 1;
  display: flex;
  align-items: center; */
  margin-bottom: 10px;
  width: 100%;
`

const Label = styled.div`
  text-align: center;
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
