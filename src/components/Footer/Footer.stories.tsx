import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Footer from "./Footer"
import { withKnobs, text } from "@storybook/addon-knobs"

storiesOf("Footer", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const content = text("Content", "Footer Content")

    return <Footer>{content}</Footer>
  })
