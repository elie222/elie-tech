import * as React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div``

const Image = styled.img``

const Label = styled.div``

interface TechnologyItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  image: string
}

export default (props: TechnologyItemProps) => {
  return (
    <Wrapper>
      <Image src={props.image} alt={props.title} />
      <Label>{props.title}</Label>
    </Wrapper>
  )
}
