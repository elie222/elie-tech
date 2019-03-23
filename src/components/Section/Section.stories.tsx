import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Section from "./Section"
import { text, withKnobs } from "@storybook/addon-knobs"

storiesOf("Section", module)
  .addDecorator(withKnobs)
  .add("default", () => <Section>{text("Content", "Some content")}</Section>)
  .add("colored background", () => (
    <Section coloredBackground>{text("Content", "Some content")}</Section>
  ))
