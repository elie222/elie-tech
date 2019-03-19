import * as React from "react"
import styled from "@emotion/styled"
import TechnologyItem, { TechnologyItemProps } from "../TechnologyItem/TechnologyItem"
import Description from "../Description/Description"

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (max-width: 360px) {
    grid-template-columns: minmax(0, 1fr);
  }
  grid-row-gap: 25px;
  justify-items: center;
`

const ItemContainer = styled.div<{ clickable: boolean }>`
  display: flex;
  justify-items: center;
  align-items: center;
  ${(props) => props.clickable && "cursor: pointer;"}
`

interface TechnologyListProps extends React.HTMLProps<HTMLDivElement> {
  technologies: TechnologyItemProps[]
  showLabel: boolean
  imageWidth: number
}

export default (props: TechnologyListProps) => {
  const [visibleDescription, setVisibleDescription] = React.useState(null)

  return (
    <Wrapper>
      {props.technologies.map(({ title, description, image, link }) => (
        <React.Fragment key={title}>
          <ItemContainer
            clickable={!!description}
            onClick={() => description && setVisibleDescription(title)}
          >
            <TechnologyItem
              title={title}
              image={image}
              description={description}
              showLabel={props.showLabel}
              imageWidth={props.imageWidth}
            />
          </ItemContainer>
          {/* TODO move this into TechnologyItem */}
          {visibleDescription === title && description && (
            <Description
              title={title}
              description={description}
              link={link}
              close={() => setVisibleDescription(null)}
            />
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  )
}
