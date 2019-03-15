import * as React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 120px;
  margin-bottom: 10px;
`

const Label = styled.div`
  text-align: center;
`

export interface TechnologyItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  image: string
}

export default (props: TechnologyItemProps) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={props.image} alt={props.title} />
      </ImageContainer>
      <Label>{props.title}</Label>
    </Wrapper>
  )
}
