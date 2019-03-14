import * as React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div<SectionProps>`
  padding: 40px 150px 42px;
  @media (max-width: 600px) {
    padding: 40px 10px 42px;
  }
  ${(props) => props.coloredBackground && "background-color: #f4f7f6;"}
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InnerWrapper = styled.div`
  /* flex: 1; */
  width: 100%;
`

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  coloredBackground?: boolean
}

export default (props: SectionProps) => {
  return <Wrapper coloredBackground={props.coloredBackground}>{props.children}</Wrapper>
}
