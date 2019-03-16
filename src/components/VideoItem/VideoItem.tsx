import * as React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

const Label = styled.div`
  text-align: center;
`

export interface VideoItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  image: string
  link: string
}

export default (props: VideoItemProps) => {
  return (
    <Wrapper href={props.link}>
      <ImageContainer>
        <Image src={props.image} alt={props.title} />
      </ImageContainer>
      <Label>{props.title}</Label>
    </Wrapper>
  )
}
