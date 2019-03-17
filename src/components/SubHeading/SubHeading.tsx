import * as React from "react"
import styled from "@emotion/styled"

const H2 = styled.h2<SubHeadingProps>`
  font-family: Titillium Web;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.color || "#000000"};
  text-align: center;
  padding-bottom: 7px;
  border-bottom: 2px solid ${(props) => props.color || "#000000"};
  display: inline-block;
  margin-bottom: 40px;
`

interface SubHeadingProps {
  children: React.ReactNode
  color?: string
}

export default (props: SubHeadingProps) => {
  return (
    <div>
      <H2 color={props.color}>{props.children}</H2>
    </div>
  )
}
