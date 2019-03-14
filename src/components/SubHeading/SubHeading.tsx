import * as React from "react"
import styled from "@emotion/styled"

const H2 = styled.h2`
  font-family: Titillium Web;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #000000;
  text-align: center;
  padding-bottom: 7px;
  border-bottom: 2px solid #000000;
  display: inline-block;
  margin-bottom: 40px;
`

export default (props: any) => {
  return (
    <div>
      <H2>{props.children}</H2>
    </div>
  )
}
