import * as React from "react"
import styled from "@emotion/styled"
import TechnologyItem, { TechnologyItemProps } from "../TechnologyItem/TechnologyItem"

const Wrapper = styled.div`
  width: 100%;
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 25px;
`

interface TechnologyListProps extends React.HTMLProps<HTMLDivElement> {
  technologies: TechnologyItemProps[]
}

export default (props: TechnologyListProps) => {
  return (
    <Wrapper>
      {props.technologies.map(({ title, image }) => (
        <TechnologyItem key={title} title={title} image={image} />
      ))}
    </Wrapper>
  )
}
