import * as React from "react"
import Button from "./Button"

// broken up to make scraping harder
const contact = () => window.open("mailto:elie" + "steinbock@" + "gmail.com", "_blank")

export default (props: any) => {
  return (
    <Button onClick={contact} transparentHover={props.transparentHover}>
      GET IN TOUCH
    </Button>
  )
}
