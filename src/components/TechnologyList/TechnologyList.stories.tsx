import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { boolean, number } from "@storybook/addon-knobs"
import TechnologyList from "./TechnologyList"
import { TechnologyItemProps } from "../TechnologyItem/TechnologyItem"

storiesOf("TechnologyList", module).add("default", () => {
  const imageWidth = 120
  const showLabel = true

  // not working
  // const imageWidth = number('Image width', 120)
  // const showLabel = boolean('Show Label', true)

  const technologies: TechnologyItemProps[] = [
    { title: "Tech 1", image: "TODO", showLabel, imageWidth },
    { title: "Tech 2", image: "TODO", showLabel, imageWidth },
    { title: "Tech 3", image: "TODO", showLabel, imageWidth },
    { title: "Tech 4", image: "TODO", showLabel, imageWidth },
  ]

  return (
    <TechnologyList technologies={technologies} showLabel={showLabel} imageWidth={imageWidth} />
  )
})
