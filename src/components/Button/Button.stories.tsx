import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Button from "./Button"

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .add("default", () => <Button onClick={action("clicked")}>{text("Text", "CLICK ME")}</Button>, {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ECnsLDgpE6digp2QtBuWiITu/Personal-Website?node-id=52%3A0",
    },
  })
  .add("full", () => (
    <Button full onClick={action("clicked")}>
      {text("Text", "CLICK ME")}
    </Button>
  ))
