/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default
const SectionReadme = require("./README.md")

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Section from "./Section"

storiesOf("Section", module)
  .addDecorator(withReadme(SectionReadme))
  .add("default", () => (
    <Section>Some content</Section>
  ))
