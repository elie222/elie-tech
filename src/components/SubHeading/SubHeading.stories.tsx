import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import SubHeading from "./SubHeading"
import { withKnobs, text } from "@storybook/addon-knobs"

storiesOf("SubHeading", module)
  .addDecorator(withKnobs)
  .add("default", () => <SubHeading>{text("Title", "SubHeading")}</SubHeading>)
