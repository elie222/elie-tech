import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Button from "./Button"

storiesOf("Button", module)
  .add("default", () => <Button onClick={action("clicked")}>CLICK ME</Button>)
  .add("full", () => (
    <Button full onClick={action("clicked")}>
      CLICK ME
    </Button>
  ))
