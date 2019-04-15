import * as React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Wrapper = styled.div<{ hover?: boolean }>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.hover &&
    `
    :hover {
      transform: translate3D(0, -2px, 0);
    }
    `}
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageWrapper = styled.div<{ imageWidth: number }>`
  width: ${(props) => props.imageWidth}px;
  max-width: 90%;
  margin-bottom: 10px;
`

const Image = styled.img`
  width: 100%;
`

const Label = styled.div`
  text-align: center;
`

export interface TechnologyItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  description?: string
  image: any
  showLabel: boolean
  imageWidth: number
  link?: string
}

export default (props: TechnologyItemProps) => {
  return (
    <Wrapper hover={!!props.description}>
      <ImageContainer>
        <ImageWrapper imageWidth={props.imageWidth}>
          {typeof props.image === "string" ? (
            <Image src={props.image} alt={props.title} />
          ) : (
            <Img fluid={props.image} alt={props.title} />
          )}
        </ImageWrapper>
      </ImageContainer>
      {/*
        looks better with this removed.
        use hover behaviour to give more info about the tech in question and its name.
      */}
      {props.showLabel && <Label>{props.title}</Label>}
    </Wrapper>
  )
}
