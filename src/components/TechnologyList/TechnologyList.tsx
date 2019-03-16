import * as React from "react"
import styled from "@emotion/styled"
import TechnologyItem, { TechnologyItemProps } from "../TechnologyItem/TechnologyItem"

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
  justify-items: center;
  grid-row-gap: 25px;
`

interface TechnologyListProps extends React.HTMLProps<HTMLDivElement> {
  technologies: TechnologyItemProps[]
  showLabel: boolean
}

export default (props: TechnologyListProps) => {
  return (
    <Wrapper>
      {props.technologies.map(({ title, image }) => (
        <TechnologyItem key={title} title={title} image={image} showLabel={props.showLabel} />
      ))}
    </Wrapper>
  )
}
