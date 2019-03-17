import * as React from "react"
import Button from "./Button"

const contact = () => window.open("mailto:elie@dappworks.co", "_blank")

export default (props: any) => {
  return <Button onClick={contact} transparentHover={props.transparentHover}>GET IN TOUCH</Button>
}
