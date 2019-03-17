import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import TechnologyList from "./TechnologyList"

storiesOf("TechnologyList", module).add("default", () => {
  const technologies: any[] = [] // TODO assign real value

  return <TechnologyList technologies={technologies} showLabel imageWidth={100} />
})
