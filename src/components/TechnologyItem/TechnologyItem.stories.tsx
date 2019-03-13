/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default
const TechnologyItemReadme = require("./README.md")

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import TechnologyItem from "./TechnologyItem"

storiesOf("TechnologyItem", module)
  .addDecorator(withReadme(TechnologyItemReadme))
  .add("default", () => {
    const title: string = "React"
    const image: string = "/images/xxx" // TODO assign real value

    return (
      <TechnologyItem title={title} image={image} />
    )
  })