import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Card from "./Card"
import { withKnobs, text } from "@storybook/addon-knobs"

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const content = text("Content", "Hello")

    return <Card>{content}</Card>
  })
