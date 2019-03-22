import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text } from "@storybook/addon-knobs"
import Button from "./Button"

const stories = storiesOf("Button", module)

stories.addDecorator(withKnobs)

stories
  .add("default", () => <Button onClick={action("clicked")}>{text("Text", "CLICK ME")}</Button>)
  .add("full", () => (
    <Button full onClick={action("clicked")}>
      {text("Text", "CLICK ME")}
    </Button>
  ))
