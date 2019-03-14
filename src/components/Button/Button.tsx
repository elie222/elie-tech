import * as React from "react"
import styled from "@emotion/styled"

const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  border: solid 3px #288ade;
  background-color: ${(props) => (props.full ? "#288ade" : "transparent")};
  font-family: Titillium Web;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2.8px;
  color: ${(props) => (props.full ? "#ffffff" : "#288ade")};
  padding: 10px 70px;

  :hover {
    background-color: ${(props) => (props.full ? "#ffffff" : "#288ade")};
    color: ${(props) => (props.full ? "#288ade" : "#ffffff")};
  }
`

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  full?: boolean
}

export default (props: ButtonProps) => {
  return <Button full={props.full}>{props.children}</Button>
}
