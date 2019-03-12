import * as React from "react"
import styled from "@emotion/styled"

const H2 = styled.h2`
  font-family: TitilliumWeb;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #000000;
`

export default (props: any) => {
  return <H2>{props.children}</H2>
}
