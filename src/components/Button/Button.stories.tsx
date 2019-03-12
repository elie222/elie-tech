/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default
const ButtonReadme = require("./README.md")

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Button from "./Button"

storiesOf("Button", module)
  .addDecorator(withReadme(ButtonReadme))
  .add("default", () => (
    <Button text="GET IN TOUCH" />
  ))
