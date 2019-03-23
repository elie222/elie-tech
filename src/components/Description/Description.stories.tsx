import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Description from "./Description"
import { text, withKnobs } from "@storybook/addon-knobs"

storiesOf("Description", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const title = text("Title", "Amazing Client")
    const description = text(
      "description",
      "We built a really complex project in a week for this awesome client!",
    )

    return <Description title={title} description={description} close={() => null} />
  })
