import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import TechnologyItem from "./TechnologyItem"
import { text, number, boolean } from "@storybook/addon-knobs"

storiesOf("TechnologyItem", module).add("default", () => {
  const title = "React"
  const image = "TODO"
  const imageWidth = 120
  const showLabel = true

  // not working
  // const title = text('Title', 'React')
  // const image = 'TODO'
  // const imageWidth = number('Image width', 120)
  // const showLabel = boolean('Show Label', true)

  return (
    <TechnologyItem title={title} image={image} showLabel={showLabel} imageWidth={imageWidth} />
  )
})
