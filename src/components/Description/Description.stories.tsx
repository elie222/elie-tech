import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Description from "./Description"

storiesOf("Description", module).add("default", () => {
  const title: string = "Amazing Client"
  const description: string = "We built a really complex project in a week for this awesome client!"

  return <Description title={title} description={description} close={() => null} />
})
