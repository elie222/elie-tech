import * as React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  border-radius: 5px;
  border: solid 3px #288ade;
  background-color: transparent;
  font-family: TitilliumWeb;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 2.8px;
  color: #288ade;
  padding: 18px 60px;

  :hover {
    background-color: #288ade;
    color: white;
  }
`;

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
}

export default (props: ButtonProps) => {
  return <Button>{props.text}</Button>;
};
