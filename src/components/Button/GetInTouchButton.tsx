import * as React from "react"
import Button from "./Button"

const contact = () => window.open("mailto:hi@elie.tech?Subject=Development%20project", "_blank")

export default (props: any) => {
  return (
    <Button onClick={contact} transparentHover={props.transparentHover}>
      GET IN TOUCH
    </Button>
  )
}
