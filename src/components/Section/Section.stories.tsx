import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Section from "./Section"

storiesOf("Section", module)
  .add("default", () => <Section>Some content</Section>)
  .add("colored background", () => <Section coloredBackground>Some content</Section>)
