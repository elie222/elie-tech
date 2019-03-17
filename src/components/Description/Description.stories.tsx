import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Description from "./Description"

storiesOf("Description", module)
  .add("default", () => {
    const title: string = null // TODO assign real value
    const description: string = null // TODO assign real value

    return (
      <Description title={title} description={description} close={() => null} />
    )
  })
