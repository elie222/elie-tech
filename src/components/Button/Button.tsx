import * as React from "react"
import styled from "@emotion/styled"

const white = "#ffffff"
const blue = "#288ade"

const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  border: solid 3px ${blue};
  background-color: ${(props) => (props.full ? blue : white)};
  font-family: Titillium Web;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2.8px;
  color: ${(props) => (props.full ? white : blue)};
  padding: 10px 70px;

  :hover {
    background-color: ${(props) => (props.full ? white : blue)};
    color: ${(props) => (props.full ? blue : white)};
  }
`

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  full?: boolean
}

export default (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>
}
