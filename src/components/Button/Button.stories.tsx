import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Button from "./Button"

storiesOf("Button", module)
  .add("default", () => <Button>GET IN TOUCH</Button>)
  .add("full", () => <Button full>GET IN TOUCH</Button>)
