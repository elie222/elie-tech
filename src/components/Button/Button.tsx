import * as React from "react"
import styled from "@emotion/styled"

const Button = styled.button`
  border-radius: 5px;
  border: solid 3px #288ade;
  background-color: transparent;
  font-family: Titillium Web;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2.8px;
  color: #288ade;
  padding: 10px 70px;

  :hover {
    background-color: #288ade;
    color: white;
  }
`

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export default (props: ButtonProps) => {
  return <Button>{props.children}</Button>
}
